import datetime
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

# region users


class User(AbstractUser):
    google_id = models.CharField(max_length=100, unique=True, null=True)
    avatar = models.URLField(null=True)

    def __str__(self):
        return self.username    
# endregion

# region tasks
class Child(models.Model):
    name = models.CharField(max_length=100)
    points = models.PositiveIntegerField(default=0)
    parent = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=255)
    points = models.PositiveIntegerField(default=0)
    description = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due_date = models.DateField()
    is_completed = models.BooleanField(default=False)
    is_recurring = models.BooleanField(default=False)
    recurrence_days = models.CharField(max_length=255, blank=True, null=True)
    parent = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name + '('+str(self.points)+')'

    def is_overdue(self):
        return self.due_date < timezone.now().date()

    def is_recurring_on_today(self):
        if not self.is_recurring:
            return False
        weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
        # today_weekday = weekdays[timezone.now().weekday()]        
        today_weekday = weekdays[self.due_date.weekday()]        
        return today_weekday in self.recurrence_days.lower()

    class Meta:
        ordering = ['-updated_at']

# class Task(models.Model):
#     name = models.CharField(max_length=100)
#     points = models.PositiveIntegerField()
#     assigned_to = models.ForeignKey(Child, related_name='tasks', on_delete=models.CASCADE)    
#     is_recurring = models.BooleanField(default=False)

#     def __str__(self):
#         return self.name + '('+str(self.points)+')'


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

# region badges
class Badge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon = models.ImageField()


class ChildBadge(models.Model):
    child = models.ForeignKey(Child, on_delete=models.CASCADE)
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE)
    date_earned = models.DateTimeField(auto_now_add=True)
# endregion
