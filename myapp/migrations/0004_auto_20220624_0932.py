# Generated by Django 2.2.12 on 2022-06-24 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0003_user_secret_key'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='secret_key',
            field=models.CharField(max_length=500, null=True),
        ),
    ]
