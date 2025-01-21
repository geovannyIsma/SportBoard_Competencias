from rest_framework.routers import DefaultRouter
from .views import *
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'player-assignments', PlayerAssignmentViewSet)
router.register(r'coach-assignments', CoachAssignmentViewSet)
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
router.register(r'discipline-catalogs', DisciplineCatalogViewSet)
# router.register(r'logo-catalogs', LogoCatalogViewSet)
# router.register(r'logo-items', LogoItemViewSet)
router.register(r'country-catalogs', CountryCatalogViewSet)
router.register(r'country-items', CountryItemViewSet)
router.register(r'format-catalogs', FormatCatalogViewSet)
router.register(r'format-items', FormatItemViewSet)

urlpatterns = router.urls

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)