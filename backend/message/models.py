from django.conf import settings
from django.db import models


class Message(models.Model):
    "Generated Model"
    message = models.CharField(
        max_length=256,
    )
    thread = models.OneToOneField(
        "message.Thread",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="message_thread",
    )
    sent_by = models.OneToOneField(
        "message.ThreadMember",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="message_sent_by",
    )
    attachment = models.URLField(
        null=True,
        blank=True,
    )
    is_draft = models.BooleanField(
        null=True,
        blank=True,
    )
    is_delivered = models.BooleanField(
        null=True,
        blank=True,
    )
    is_read = models.BooleanField(
        null=True,
        blank=True,
    )
    timestamp_created = models.DateTimeField(
        null=True,
        blank=True,
    )
    timestamp_delivered = models.DateTimeField(
        null=True,
        blank=True,
    )
    timestamp_read = models.DateTimeField(
        null=True,
        blank=True,
    )


class Thread(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=256,
    )
    thread_photo = models.URLField()
    timestamp_created = models.DateTimeField()


class ThreadAction(models.Model):
    "Generated Model"
    action = models.CharField(
        max_length=256,
    )
    thread = models.OneToOneField(
        "message.Thread",
        on_delete=models.CASCADE,
        related_name="threadaction_thread",
    )
    profile = models.OneToOneField(
        "contact.Profile",
        on_delete=models.CASCADE,
        related_name="threadaction_profile",
    )
    timestamp_action = models.DateTimeField()


class MessageAction(models.Model):
    "Generated Model"
    action = models.CharField(
        max_length=256,
    )
    message = models.OneToOneField(
        "message.Message",
        on_delete=models.CASCADE,
        related_name="messageaction_message",
    )
    profile = models.OneToOneField(
        "contact.Profile",
        on_delete=models.CASCADE,
        related_name="messageaction_profile",
    )
    timestamp_action = models.DateTimeField()


class ThreadMember(models.Model):
    "Generated Model"
    profile = models.OneToOneField(
        "contact.Profile",
        on_delete=models.CASCADE,
        related_name="threadmember_profile",
    )
    thread = models.OneToOneField(
        "message.Thread",
        on_delete=models.CASCADE,
        related_name="threadmember_thread",
    )
    is_admin = models.BooleanField()
    timestamp_joined = models.DateTimeField()
    timestamp_left = models.DateTimeField()
    last_rejoined = models.DateTimeField()


class ForwardedMessage(models.Model):
    "Generated Model"
    message = models.OneToOneField(
        "message.Message",
        on_delete=models.CASCADE,
        related_name="forwardedmessage_message",
    )
    forwarded_by = models.OneToOneField(
        "contact.Profile",
        on_delete=models.CASCADE,
        related_name="forwardedmessage_forwarded_by",
    )
    forwarded_to = models.OneToOneField(
        "message.Thread",
        on_delete=models.CASCADE,
        related_name="forwardedmessage_forwarded_to",
    )
    timestamp_forwarded = models.DateTimeField()


# Create your models here.
