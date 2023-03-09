from rest_framework import serializers
from .models import Task, Child, Badge, Reward

class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ('name', 'points', 'parent')