from rest_framework import serializers
from .models import Task, Child, Badge, Reward

class ChildSerializer(serializers.ModelSerializer):
    class Meta:
        model = Child
        fields = ('name', 'points', 'parent')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('name', 'points', 'description', 'created_at', 'updated_at', 'due_date', 'is_completed', 'is_recurring', 'recurrence_days', 'parent')