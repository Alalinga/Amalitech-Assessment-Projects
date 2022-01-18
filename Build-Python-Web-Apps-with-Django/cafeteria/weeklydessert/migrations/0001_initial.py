# Generated by Django 3.1.7 on 2022-01-18 00:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Week',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pub_date', models.DateTimeField(verbose_name='date published')),
            ],
        ),
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dessert_choice', models.CharField(max_length=200)),
                ('dessert_details', models.CharField(max_length=200)),
                ('votes', models.IntegerField(default=0)),
                ('week', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='weeklydessert.week')),
            ],
        ),
    ]
