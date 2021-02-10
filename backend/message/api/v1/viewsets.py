from rest_framework import authentication
from message.models import Message
from .serializers import MessageSerializer
from rest_framework import viewsets


class MessageViewSet(viewsets.ModelViewSet):
    serializer_class = MessageSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Message.objects.all()
