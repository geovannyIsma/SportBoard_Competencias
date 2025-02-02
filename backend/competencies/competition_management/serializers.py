from rest_framework import serializers
from .models import *
from django.conf import settings

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PlayerAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerAssignment
        fields = '__all__'

class CoachAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoachAssignment
        fields = '__all__'

class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = '__all__'

class PlanningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planning
        fields = '__all__'

class SquadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Squad
        fields = '__all__'

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = '__all__'

class RuleCompetenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = RuleCompetition
        fields = '__all__'

class RuleDisciplineSerializer(serializers.ModelSerializer):
    class Meta:
        model = RuleDiscipline
        fields = '__all__'

class CompetenceSerializer(serializers.ModelSerializer):
    logo = serializers.ImageField(required=False, allow_null=True)
    rule_list = RuleCompetenceSerializer(many=True, required=False, read_only=True)
    rule_discipline_list = RuleDisciplineSerializer(many=True, required=False, read_only=True)
    competence_format = serializers.PrimaryKeyRelatedField(queryset=Format.objects.all(), required=False, allow_null=True)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['logo']:
            representation['logo'] = representation['logo'].replace('http://ms2-competencies:8003', 'http://localhost:8000')
        
        # Asegurarse de que rule_discipline_list siempre sea una lista
        if representation.get('rule_discipline_list') is None:
            representation['rule_discipline_list'] = []
            
        return representation

    class Meta:
        model = Competence
        fields = '__all__'

class DisciplineSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False, allow_null=True)
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        if representation['image']:
            # Solo reemplazar la URL si existe la imagen
            representation['image'] = representation['image'].replace('http://ms2-competencies:8003', 'http://localhost:8000')
        return representation
    
    class Meta:
        model = Discipline
        fields = '__all__'

class CompetenceEditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompetitionEdition
        fields = '__all__'

class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = '__all__'

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = '__all__'

class LocalitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Locality
        fields = '__all__'


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'

class FormatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Format
        fields = '__all__'