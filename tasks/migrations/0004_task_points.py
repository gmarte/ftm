# Generated by Django 4.1.6 on 2023-03-15 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0003_alter_task_options_remove_task_assigned_to_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='points',
            field=models.PositiveIntegerField(default=0),
        ),
    ]