from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
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

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

class CompetenceViewSet(viewsets.ModelViewSet):
    queryset = Competence.objects.all()
    serializer_class = CompetenceSerializer
    parser_classes = (MultiPartParser, FormParser)

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
        # Mantener el logo existente si no se proporciona uno nuevo
        if 'logo' not in request.data:
            request.data._mutable = True
            request.data.pop('logo', None)
            request.data._mutable = False
            
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        # Actualizar las reglas si se proporcionan
        rules_data = request.data.get('rule_list')
        if rules_data:
            try:
                rules_data = json.loads(rules_data)
                instance.rule_list.clear()
                for rule_data in rules_data:
                    rule_id = rule_data.get('id')
                    if rule_id:
                        rule = RuleCompetition.objects.get(id=rule_id)
                        instance.rule_list.add(rule)
            except Exception as e:
                print(f"Error updating rules: {str(e)}")

        return Response(serializer.data)

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

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class FormatViewSet(viewsets.ModelViewSet):
    queryset = Format.objects.all()
    serializer_class = FormatSerializer

class StageCompetitionViewSet(viewsets.ModelViewSet):
    queryset = StageCompetition.objects.all()
    serializer_class = StageCompetitionSerializer