# Generated by Django 2.2.12 on 2022-06-29 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0018_auto_20220629_0948'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderdetails',
            name='product_price',
            field=models.CharField(max_length=11),
        ),
    ]
