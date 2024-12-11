# competition_management/models.py

from django.db import models
from abc import ABC, abstractmethod
from django.core.exceptions import ValidationError

class Person(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dni = models.CharField(max_length=100, unique=True)

    class Meta:
        abstract = True

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Role(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name

class User(Person):
    email = models.EmailField()
    password = models.CharField(max_length=100)
    rol = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Coach(Person):
    years_experience = models.IntegerField()
    certification = models.CharField(max_length=100)
    contract_list = models.ForeignKey('CoachAssignment', on_delete=models.CASCADE, related_name='coach_contracts')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Player(Person):
    position = models.CharField(max_length=100)
    number = models.IntegerField()
    height = models.FloatField()
    weight = models.FloatField()
    assigmnet_list = models.ForeignKey('PlayerAssignment', on_delete=models.CASCADE, related_name='player_assignments')

    def __str__(self):
        return f'{self.first_name} {self.last_name} - {self.position} - {self.number}'

class Planning(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f'{self.start_date} - {self.end_date}'

class Squad(models.Model):
    football_season = models.ForeignKey(Planning, on_delete=models.CASCADE)
    assigmnet_list = models.ForeignKey('PlayerAssignment', on_delete=models.CASCADE, related_name='squad_assignments')
    contract_list = models.ForeignKey('CoachAssignment', on_delete=models.CASCADE, related_name='squad_contracts')
    team_list = models.ForeignKey('Team', on_delete=models.CASCADE)
    registration_list = models.ForeignKey('Registration', on_delete=models.CASCADE, related_name='squad_registrations')

    def add_player(self, player):
        PlayerAssignment.objects.create(player=player, team=self)

    def remove_player(self, player):
        PlayerAssignment.objects.get(player=player, team=self).delete()

    def __str__(self):
        return f'{self.football_season} - {self.assigmnet_list} - {self.contract_list} - {self.team_list}'

class Registration(models.Model):
    serie = models.CharField(max_length=100)
    squad = models.ForeignKey(Squad, on_delete=models.CASCADE)
    competence = models.ForeignKey('CompetenceEdition', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.serie} - {self.squad}'

class Competence(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    logo = models.ImageField(upload_to='logos/')
    format = models.CharField(max_length=100)

    def update_logo(self, logo):
        self.logo = logo
        self.save()

    def __str__(self):
        return self.name

class RuleInterface(ABC):
    @abstractmethod
    def change_actor(self, actor):
        pass

    def evaluate(self):
        pass

    def sancion(self):
        pass

class Rule(models.Model):
    numeration = models.IntegerField()
    rule_decription = models.TextField()
    actor = models.ForeignKey(User, on_delete=models.CASCADE)
    action = models.CharField(max_length=100)
    type = models.CharField(max_length=100)

    class Meta:
        abstract = True

    def change_actor(self, actor):
        self.actor = actor
        self.save()

    def evaluate(self):
        # TODO: Implement this method
        pass

    def sancion(self):
        # TODO: Implement this method
        pass

    def __str__(self):
        return f'{self.numeration} - {self.rule_decription} - {self.actor} - {self.action} - {self.type}'

class Discipline(models.Model):
    name = models.CharField(max_length=100)
    surface = models.CharField(max_length=100)
    federation = models.CharField(max_length=100)
    rule_list = models.ForeignKey('RuleDiscipline', on_delete=models.CASCADE, related_name='discipline_rules')

    def __str__(self):
        return f'{self.name} - {self.surface} - {self.federation}'

class RuleCompetence(Rule):
    pass

class RuleDiscipline(Rule):
    discipline = models.ForeignKey(Discipline, on_delete=models.CASCADE)

class CompetenceEdition(models.Model):
    competence_admin = models.ForeignKey(User, on_delete=models.CASCADE)
    inscription_list = models.ForeignKey('Registration', on_delete=models.CASCADE)
    subdivision = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True)
    planning = models.ForeignKey(Planning, on_delete=models.CASCADE)
    competence = models.ForeignKey(Competence, on_delete=models.CASCADE)
    stage_list = models.ForeignKey('Stage', on_delete=models.CASCADE)
    rule_list = models.OneToOneField('RuleCompetence', on_delete=models.CASCADE)
    rule_discipline_list = models.ForeignKey('RuleDiscipline', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.competence_admin} - {self.inscription_list}'

class Stage(models.Model):
    planning = models.ForeignKey(Planning, on_delete=models.CASCADE)

    def change_start_date(self, start_date):
        self.planning.start_date = start_date
        self.planning.save()

    def change_end_date(self, end_date):
        self.planning.end_date = end_date
        self.planning.save()

class CoachAssignment(models.Model):
    coach = models.ForeignKey(Coach, on_delete=models.CASCADE)
    team = models.ForeignKey(Squad, on_delete=models.CASCADE)

class PlayerAssignment(models.Model):
    player = models.ForeignKey(Player, on_delete=models.CASCADE)
    team = models.ForeignKey(Squad, on_delete=models.CASCADE)

class Team(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='logos/')
    squad_list = models.ForeignKey(Squad, on_delete=models.CASCADE, related_name='team_squads')

    def update_logo(self, logo):
        self.logo = logo
        self.save()

    def __str__(self):
        return f'{self.name} - {self.country}'

class Match(models.Model):
    away_goals = models.IntegerField()
    home_goals = models.IntegerField()
    date = models.DateField()
    team_list = models.ManyToManyField(Team)
    stadium = models.ForeignKey('Locality', on_delete=models.CASCADE)
    stage = models.ForeignKey(Stage, on_delete=models.CASCADE)

    def clean(self):
        if self.team_list.count() != 2:
            raise ValidationError('A match must have two teams')

    def add_goal(self, team):
        if team in self.team_list.all():
            if team == self.team_list.first():
                self.home_goals += 1
            else:
                self.away_goals += 1
        else:
            raise ValidationError('The team is not playing this match')

    def annul_goal(self, team):
        if team in self.team_list.all():
            if team == self.team_list.first():
                self.home_goals -= 1
            else:
                self.away_goals -= 1
        else:
            raise ValidationError('The team is not playing this match')

    def define_winner(self):
        if self.home_goals > self.away_goals:
            return self.team_list.first()
        elif self.home_goals < self.away_goals:
            return self.team_list.last()
        else:
            return None

    def __str__(self):
        return f'{self.team_list.first()} {self.home_goals} - {self.away_goals} {self.team_list.last()}'

class Locality(models.Model):
    stadium_name = models.CharField(max_length=100)
    street_One = models.CharField(max_length=100)
    street_Two = models.CharField(max_length=100)
    reference = models.CharField(max_length=100)

    def change_stadium(self, stadium_name):
        self.stadium_name = stadium_name
        self.save()

    def change_reference(self, reference, street_One, street_Two):
        self.reference = reference
        self.street_One = street_One
        self.street_Two = street_Two
        self.save()

    def __str__(self):
        return f'{self.stadium_name} - {self.reference}'
