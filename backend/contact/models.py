from django.conf import settings
from django.db import models


class Profile(models.Model):
    "Generated Model"
    mobile_number = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    pin = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    photo = models.URLField(
        null=True,
        blank=True,
    )
    status = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    birthdate = models.BigIntegerField(
        null=True,
        blank=True,
    )
    gender = models.CharField(
        max_length=256,
        null=True,
        blank=True,
    )
    timestamp_created = models.DateTimeField(
        null=True,
        blank=True,
    )
    last_updated = models.DateField(
        null=True,
        blank=True,
    )
    last_login = models.DateTimeField(
        null=True,
        blank=True,
    )
    user = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="profile_user",
    )


class Contact(models.Model):
    "Generated Model"
    added_by = models.OneToOneField(
        "users.User",
        on_delete=models.CASCADE,
        related_name="contact_added_by",
    )
    added_profile = models.OneToOneField(
        "contact.Profile",
        on_delete=models.CASCADE,
        related_name="contact_added_profile",
    )
    is_blocked = models.BooleanField()
    is_favorite = models.BooleanField()
    timestamp_created = models.DateTimeField()


class VerificationCode(models.Model):
    "Generated Model"
    code = models.CharField(
        max_length=256,
    )
    sent_to = models.OneToOneField(
        "contact.Profile",
        on_delete=models.CASCADE,
        related_name="verificationcode_sent_to",
    )
    is_verified = models.BooleanField()
    timestamp_created = models.DateTimeField()
    timestamp_verified = models.DateTimeField()


# Create your models here.
