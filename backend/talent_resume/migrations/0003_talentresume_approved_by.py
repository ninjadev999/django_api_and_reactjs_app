# Generated by Django 2.0.5 on 2019-02-11 01:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('talent_resume', '0002_auto_20190211_0147'),
    ]

    operations = [
        migrations.AddField(
            model_name='talentresume',
            name='approved_by',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]
