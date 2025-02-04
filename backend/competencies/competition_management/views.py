from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.response import Response
from rest_framework import status
import json
from django.db import transaction
from .models import *
from .serializers import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlayerAssignmentViewSet(viewsets.ModelViewSet):
    queryset = PlayerAssignment.objects.all()
    serializer_class = PlayerAssignmentSerializer

class CoachAssignmentViewSet(viewsets.ModelViewSet):
    queryset = CoachAssignment.objects.all()
    serializer_class = CoachAssignmentSerializer

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class PlanningViewSet(viewsets.ModelViewSet):
    queryset = Planning.objects.all()
    serializer_class = PlanningSerializer

class SquadViewSet(viewsets.ModelViewSet):
    queryset = Squad.objects.all()
    serializer_class = SquadSerializer

    def get_queryset(self):
        return Squad.objects.all().select_related('team')
        
    def create(self, request, *args, **kwargs):
        team_id = request.data.get('team')
        players_data = request.data.get('players', [])
        coaches_data = request.data.get('coaches', [])

        try:
            team = Team.objects.get(id=team_id)
            squad = Squad.objects.create(team=team)

            # Procesar jugadores
            for player_data in players_data:
                if isinstance(player_data, dict):
                    # Nuevo jugador - eliminar ID si existe
                    if 'id' in player_data:
                        del player_data['id']
                    player = User.objects.create(**player_data)
                else:
                    # Jugador existente
                    player = User.objects.get(id=player_data)
                PlayerAssignment.objects.create(squad=squad, player=player)

            # Procesar entrenadores
            for coach_data in coaches_data:
                if isinstance(coach_data, dict):
                    # Nuevo entrenador - eliminar ID si existe
                    if 'id' in coach_data:
                        del coach_data['id']
                    coach = User.objects.create(**coach_data)
                else:
                    # Entrenador existente
                    coach = User.objects.get(id=coach_data)
                CoachAssignment.objects.create(squad=squad, coach=coach)

            squad.refresh_from_db()
            serializer = self.get_serializer(squad)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

    @transaction.atomic
    def update(self, request, *args, **kwargs):
        squad = self.get_object()
        team_id = request.data.get('team')
        players_data = request.data.get('players', [])
        coaches_data = request.data.get('coaches', [])
        new_players = request.data.get('new_players', [])
        new_coaches = request.data.get('new_coaches', [])

        try:
            with transaction.atomic():
                # Actualizar equipo si es necesario
                if team_id and team_id != squad.team.id:
                    team = Team.objects.get(id=team_id)
                    squad.team = team
                    squad.save()

                # Limpiar asignaciones existentes
                PlayerAssignment.objects.filter(squad=squad).delete()
                CoachAssignment.objects.filter(squad=squad).delete()

                # Crear nuevos usuarios jugadores
                created_players = []
                for player_data in new_players:
                    player_data['role'] = 'Player'
                    if 'id' in player_data:
                        del player_data['id']
                    player = User.objects.create(**player_data)
                    created_players.append(player.id)

                # Crear nuevos usuarios entrenadores
                created_coaches = []
                for coach_data in new_coaches:
                    coach_data['role'] = 'Coach'
                    if 'id' in coach_data:
                        del coach_data['id']
                    coach = User.objects.create(**coach_data)
                    created_coaches.append(coach.id)

                # Combinar IDs existentes con los nuevos
                all_player_ids = [p for p in players_data if isinstance(p, (int, str))] + created_players
                all_coach_ids = [c for c in coaches_data if isinstance(c, (int, str))] + created_coaches

                # Crear asignaciones
                for player_id in all_player_ids:
                    PlayerAssignment.objects.create(
                        squad=squad, 
                        player=User.objects.get(id=player_id)
                    )

                for coach_id in all_coach_ids:
                    CoachAssignment.objects.create(
                        squad=squad, 
                        coach=User.objects.get(id=coach_id)
                    )

                squad.refresh_from_db()
                serializer = self.get_serializer(squad)
                return Response(serializer.data)

        except Exception as e:
            return Response(
                {"error": str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

class CompetenceViewSet(viewsets.ModelViewSet):
    queryset = Competence.objects.all()
    serializer_class = CompetenceSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def perform_create(self, serializer):
        competence = serializer.save()
        rules_data = self.request.data.get('rule_list', [])
        for rule_data in rules_data:
            RuleCompetition.objects.create(competence=competence, **rule_data)

    def perform_update(self, serializer):
        competence = serializer.save()
        rules_data = self.request.data.get('rule_list')
        if rules_data:
            try:
                rules_data = json.loads(rules_data)
                competence.rule_list.clear()
                for rule_data in rules_data:
                    rule_id = rule_data.get('id')
                    if rule_id:
                        rule = RuleCompetition.objects.get(id=rule_id)
                        competence.rule_list.add(rule)
            except Exception as e:
                print(f"Error updating rules: {str(e)}")
        return competence

    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        
        # Convertir el FormData a un diccionario
        data = request.data.dict() if hasattr(request.data, 'dict') else request.data
        
        # Manejar rule_discipline_list
        rule_discipline_list = data.get('rule_discipline_list')
        if rule_discipline_list:
            try:
                # Convertir de string JSON a lista si es necesario
                if isinstance(rule_discipline_list, str):
                    rule_discipline_list = json.loads(rule_discipline_list)
                
                # Asegurarnos de que tenemos una lista
                if isinstance(rule_discipline_list, list):
                    # Obtener los IDs de las reglas
                    rule_ids = []
                    for rule in rule_discipline_list:
                        if isinstance(rule, dict):
                            rule_ids.append(rule.get('id'))
                        elif isinstance(rule, int):
                            rule_ids.append(rule)
                    
                    # Limpiar las reglas existentes y agregar las nuevas
                    instance.rule_discipline_list.clear()
                    if rule_ids:
                        rules = RuleDiscipline.objects.filter(id__in=rule_ids)
                        instance.rule_discipline_list.add(*rules)
            except Exception as e:
                print(f"Error processing rule_discipline_list: {str(e)}")
                return Response(
                    {"error": f"Error processing rule_discipline_list: {str(e)}"},
                    status=status.HTTP_400_BAD_REQUEST
                )

        # Actualizar otros campos
        serializer = self.get_serializer(instance, data=data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        # Refrescar la instancia para obtener los datos actualizados
        instance.refresh_from_db()
        
        # Serializar y devolver la respuesta actualizada
        response_serializer = self.get_serializer(instance)
        return Response(response_serializer.data)

class RuleCompetenceViewSet(viewsets.ModelViewSet):
    queryset = RuleCompetition.objects.all()
    serializer_class = RuleCompetenceSerializer

    def perform_create(self, serializer):
        rule = serializer.save()
        competence_id = self.request.data.get('competence')
        if competence_id:
            try:
                competence = Competence.objects.get(id=competence_id)
                competence.rule_list.add(rule)
            except Competence.DoesNotExist:
                pass
        return rule

class RuleDisciplineViewSet(viewsets.ModelViewSet):
    queryset = RuleDiscipline.objects.all()
    serializer_class = RuleDisciplineSerializer

class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer

class CompetenceEditionViewSet(viewsets.ModelViewSet):
    queryset = CompetitionEdition.objects.all()
    serializer_class = CompetenceEditionSerializer

class StageViewSet(viewsets.ModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class LocalityViewSet(viewsets.ModelViewSet):
    queryset = Locality.objects.all()
    serializer_class = LocalitySerializer

class FormatViewSet(viewsets.ModelViewSet):
    queryset = Format.objects.all()
    serializer_class = FormatSerializer
