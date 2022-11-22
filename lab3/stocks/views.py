from django.shortcuts import render
from rest_framework import viewsets
from stocks.serializers import  UserSerializer, ServicesSerializer, Sign_upSerializer, ScheduleSerializer
from stocks.models import  User, Sign_up, Services,Schedule


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class ServicesViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Services.objects.all().order_by('pk')
    serializer_class = ServicesSerializer


class ScheduleViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Schedule.objects.all().order_by('pk')
    serializer_class = ScheduleSerializer


class Sign_upViewSet(viewsets.ModelViewSet):
        """
        API endpoint, который позволяет просматривать и редактировать акции компаний
        """
        # queryset всех пользователей для фильтрации по дате последнего изменения
        queryset = Sign_up.objects.all().order_by('time1')
        serializer_class = Sign_upSerializer



# Create your views here.
