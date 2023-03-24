from django.test import TestCase
from .test_setup import TestSetUp
from django.utils import timezone


# Create your tests here.
from django.urls import reverse
from rest_framework.test import APITestCase
from ..models import User, Child, Task, WeeklyTaskCompletion, Reward
import datetime

class ModelsTest(TestSetUp):
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
            name='Test Recurring Task',
            points=20,
            description='This is a test recurring task',
            due_date=timezone.now().date(),
            is_recurring=True,
            recurrence_days='monday, wednesday, friday',
            parent=self.user
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

    def test_is_recurring_on_today(self):
        # Test that the task is recurring on Monday
        monday_task = self.task
        monday_task.due_date = timezone.datetime(2023, 2, 6, tzinfo=timezone.utc).date()  # Monday
        monday_task.save()
        self.assertTrue(monday_task.is_recurring_on_today())

        # Test that the task is recurring on Wednesday
        wednesday_task = self.task
        wednesday_task.due_date = timezone.datetime(2023, 2, 8, tzinfo=timezone.utc).date()  # Wednesday
        wednesday_task.save()
        self.assertTrue(wednesday_task.is_recurring_on_today())

        # Test that the task is recurring on Friday
        friday_task = self.task
        friday_task.due_date = timezone.datetime(2023, 2, 10, tzinfo=timezone.utc).date()  # Friday
        friday_task.save()
        self.assertTrue(friday_task.is_recurring_on_today())

        # Test that the task is not recurring on Tuesday
        tuesday_task = self.task
        tuesday_task.due_date = timezone.datetime(2023, 2, 7, tzinfo=timezone.utc).date()  # Tuesday
        tuesday_task.save()
        self.assertFalse(tuesday_task.is_recurring_on_today())

        # Test that the task is not recurring on Thursday
        thursday_task = self.task
        thursday_task.due_date = timezone.datetime(2023, 2, 9, tzinfo=timezone.utc).date()  # Thursday
        thursday_task.save()
        self.assertFalse(thursday_task.is_recurring_on_today())

        # Test that the task is not recurring on Saturday
        saturday_task = self.task
        saturday_task.due_date = timezone.datetime(2023, 2, 11, tzinfo=timezone.utc).date()  # Saturday
        saturday_task.save()
        self.assertFalse(saturday_task.is_recurring_on_today())

        # Test that the task is not recurring on Sunday
        sunday_task = self.task
        sunday_task.due_date = timezone.datetime(2023, 2, 12, tzinfo=timezone.utc).date()  # Sunday
        sunday_task.save()
        self.assertFalse(sunday_task.is_recurring_on_today())