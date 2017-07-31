from django.db import models
from django.conf import settings
User =settings.AUTH_USER_MODEL
from ckeditor_uploader.fields import RichTextUploadingField


class Task(models.Model):
    title = models.CharField(max_length=50)
    description = RichTextUploadingField(default="")

    def __str__(self):
        return self.title

from django.contrib import admin
admin.site.register(Task)
