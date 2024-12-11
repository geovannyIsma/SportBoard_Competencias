# competition_management/views.py

from rest_framework import viewsets
from .models import *
from .serializers import *

class RoleViewSet(viewsets.ModelViewSet):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CoachViewSet(viewsets.ModelViewSet):
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class CoachAssignmentViewSet(viewsets.ModelViewSet):
    queryset = CoachAssignment.objects.all()
    serializer_class = CoachAssignmentSerializer

class PlayerAssignmentViewSet(viewsets.ModelViewSet):
    queryset = PlayerAssignment.objects.all()
    serializer_class = PlayerAssignmentSerializer

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

class RuleCompetenceViewSet(viewsets.ModelViewSet):
    queryset = RuleCompetence.objects.all()
    serializer_class = RuleCompetenceSerializer

class RuleDisciplineViewSet(viewsets.ModelViewSet):
    queryset = RuleDiscipline.objects.all()
    serializer_class = RuleDisciplineSerializer

class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer

class CompetenceEditionViewSet(viewsets.ModelViewSet):
    queryset = CompetenceEdition.objects.all()
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