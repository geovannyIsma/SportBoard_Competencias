# competition_management/admin.py

from django.contrib import admin
from .models import Role, User, Coach, Player, CoachAssignment, PlayerAssignment, Match, Planning, Squad, Registration, Competence, RuleCompetence, RuleDiscipline, Discipline, CompetenceEdition, Stage, Team, Locality

admin.site.register(Role)
admin.site.register(User)
admin.site.register(Coach)
admin.site.register(Player)
admin.site.register(CoachAssignment)
admin.site.register(PlayerAssignment)
admin.site.register(Match)
admin.site.register(Planning)
admin.site.register(Squad)
admin.site.register(Registration)
admin.site.register(Competence)
admin.site.register(RuleCompetence)
admin.site.register(RuleDiscipline)
admin.site.register(Discipline)
admin.site.register(CompetenceEdition)
admin.site.register(Stage)
admin.site.register(Team)
admin.site.register(Locality)