from .models import Task
from django import forms

class TaskCreate(forms.ModelForm):
    class Meta:
        exclude = ['start']
        model = Task