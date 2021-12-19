from django.db import models

class Obj(models.Model):
    name = models.CharField(max_length=64, unique=True)
    data = models.JSONField()