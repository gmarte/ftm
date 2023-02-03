import datetime
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse

# region users
class User(AbstractUser):
    google_id = models.CharField(max_length=100, unique=True, null=True)
    avatar = models.URLField(null=True)
    
    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse("user_detail", kwargs={"username": self.username})
# endregion

# region tasks

class Child(models.Model):
    name = models.CharField(max_length=100)
    points = models.PositiveIntegerField(default=0)
    
    def __str__(self):
        return self.name

class Task(models.Model):
    name = models.CharField(max_length=100)
    points = models.PositiveIntegerField()
    assigned_to = models.ForeignKey(Child, on_delete=models.CASCADE)
    is_recurring = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name

class WeeklyTaskCompletion(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    child = models.ForeignKey(Child, on_delete=models.CASCADE)
    week_number = models.PositiveSmallIntegerField()
    completed = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.child} - {self.task} - Week {self.week_number}"

    @property
    def week_start(self):
        return datetime.datetime.strptime(f"{self.week_number} 0", "%U %w").date()

class Reward(models.Model):
    name = models.CharField(max_length=100)
    points = models.PositiveIntegerField()
    assigned_to = models.ForeignKey(Child, on_delete=models.CASCADE)
    redeemed = models.BooleanField(default=False)
    
    def __str__(self):
        return self.name

# endregion        