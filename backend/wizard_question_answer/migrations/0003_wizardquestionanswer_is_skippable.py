# Generated by Django 2.0.5 on 2018-12-05 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('wizard_question_answer', '0002_auto_20181204_1726'),
    ]

    operations = [
        migrations.AddField(
            model_name='wizardquestionanswer',
            name='is_skippable',
            field=models.BooleanField(default=False),
        ),
    ]
