# competition_management/urls.py

from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'roles', RoleViewSet)
router.register(r'users', UserViewSet)
router.register(r'coaches', CoachViewSet)
router.register(r'players', PlayerViewSet)
router.register(r'coach-assignments', CoachAssignmentViewSet)
router.register(r'player-assignments', PlayerAssignmentViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'plannings', PlanningViewSet)
router.register(r'squads', SquadViewSet)
router.register(r'registrations', RegistrationViewSet)
router.register(r'competences', CompetenceViewSet)
router.register(r'rule-competences', RuleCompetenceViewSet)
router.register(r'rule-disciplines', RuleDisciplineViewSet)
router.register(r'disciplines', DisciplineViewSet)
router.register(r'competence-editions', CompetenceEditionViewSet)
router.register(r'stages', StageViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'localities', LocalityViewSet)

urlpatterns = router.urls