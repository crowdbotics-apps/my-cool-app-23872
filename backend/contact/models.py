from django.conf import settings
from django.db import models


class Profile(models.Model):
    "Generated Model"
    user = models.CharField(
        max_length=256,
    )


# Create your models here.
