# Generated by Django 2.0.5 on 2018-11-21 17:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sub_skill', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subskill',
            name='download_video_link',
            field=models.CharField(blank=True, max_length=1024),
        ),
        migrations.AddField(
            model_name='subskill',
            name='max_video_time',
            field=models.IntegerField(blank=True, default=3600),
        ),
        migrations.AddField(
            model_name='subskill',
            name='video_steps',
            field=models.IntegerField(blank=True, default=1),
        ),
    ]