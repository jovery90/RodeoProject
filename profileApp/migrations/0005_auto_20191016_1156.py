# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-10-16 16:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profileApp', '0004_auto_20191015_1350'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='gender',
            field=models.CharField(choices=[('male', 'MALE'), ('female', 'FEMALE')], default='male', max_length=30),
        ),
    ]
