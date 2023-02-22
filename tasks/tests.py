from django.test import TestCase

# Create your tests here.
from django.urls import reverse
from .models import User, Child, Task, WeeklyTaskCompletion, Reward
import datetime

class ModelsTest(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass'
        )
        self.child = Child.objects.create(
            name='Test Child',
            points=0,
            parent=self.user
        )
        self.task = Task.objects.create(
            name='Test Task',
            points=10,
            assigned_to=self.child,
            is_recurring=False
        )
        self.weekly_completion = WeeklyTaskCompletion.objects.create(
            task=self.task,
            child=self.child,
            week_number=10,
            completed=False
        )
        self.reward = Reward.objects.create(
            name='Test Reward',
            points=20,
            assigned_to=self.child,
            redeemed=False
        )

    def test_user_str(self):
        self.assertEqual(str(self.user), self.user.username)    

    def test_child_str(self):
        self.assertEqual(str(self.child), self.child.name)

    def test_task_str(self):
        expected = f'{self.task.name}({self.task.points})'
        self.assertEqual(str(self.task), expected)

    def test_weekly_completion_str(self):
        expected = f'{self.child} - {self.task} - Week {self.weekly_completion.week_number}'
        self.assertEqual(str(self.weekly_completion), expected)

    def test_weekly_completion_week_start(self):
        expected = datetime.datetime.strptime(f"10 0", "%U %w").date()
        self.assertEqual(self.weekly_completion.week_start, expected)

    def test_reward_str(self):
        self.assertEqual(str(self.reward), self.reward.name)