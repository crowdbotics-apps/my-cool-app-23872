from django.conf import settings
from django.db import models


class Message(models.Model):
    "Generated Model"
    message = models.CharField(
        max_length=256,
    )


# Create your models here.
