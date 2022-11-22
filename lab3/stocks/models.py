from django.db import models


from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100, verbose_name="Пользователь")
    phone = models.CharField(max_length= 20, verbose_name="Телефон пользователя")
    login = models.CharField(max_length= 100, verbose_name="Логин")
    password = models.CharField(max_length= 100,verbose_name="Пароль")

    class Meta:
        managed = False
        db_table = 'user'
        verbose_name = "Пользователь"
        verbose_name_plural = "Пользователи"

class Services(models.Model):
    service = models.CharField(max_length=30, verbose_name="Услуга")
    description = models.CharField(max_length=100, verbose_name="Описание услуги")
    price = models.IntegerField(max_length=50, verbose_name="Стоимость")

    class Meta:
        managed = False
        db_table = 'services'
        verbose_name = "Сервис"
        verbose_name_plural = "Сервисы"

class Schedule(models.Model):
    time2 = models.CharField(max_length=10, verbose_name="Время")

    class Meta:
        managed = False
        db_table = 'schedule'
        verbose_name = "Расписание"
        verbose_name_plural = "Расписания"


class Sign_up(models.Model):
    time1 = models.ForeignKey(Schedule, on_delete = models.CASCADE, verbose_name="Назначенное время")
    service1 = models.ForeignKey(Services, on_delete = models.CASCADE, verbose_name="Название услуги")
    client_user = models.ForeignKey(User, on_delete = models.CASCADE, verbose_name="Имя пользователя")

    class Meta:
        managed = False
        db_table = 'sign_up'
        verbose_name = "Запись"
        verbose_name_plural = "Записи"



# Create your models here.
