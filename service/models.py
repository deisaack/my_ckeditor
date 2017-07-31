from django.db import models
from django.conf import settings
User =settings.AUTH_USER_MODEL
from ckeditor_uploader.fields import RichTextUploadingField

class Emplovee(models.Model):
    user = models.ForeignKey(User, related_name='+')
    employee_id = models.CharField(max_length=10, null=True, blank=True)
    RANK_CHOICES = (
        ('RG','Regular'),
    ('HR','Human Resource'),
    ('SP','Superior'),
    )
    rank = models.CharField(max_length=2, choices=RANK_CHOICES, default='RG')

    def __str__(self):
        return self.employee_id


class Task(models.Model):
    title = models.CharField(max_length=50)
    description = RichTextUploadingField(default="")
    start = models.DateTimeField(auto_now=False, auto_now_add=False)

    def __str__(self):
        return self.title

from django.contrib import admin
admin.site.register(Task)