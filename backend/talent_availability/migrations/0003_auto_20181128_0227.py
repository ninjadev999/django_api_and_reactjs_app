# Generated by Django 2.0.5 on 2018-11-28 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('talent_availability', '0002_talentavailability_updated_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='talentavailability',
            name='updated_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]