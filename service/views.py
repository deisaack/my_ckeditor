from django.shortcuts import render
from django.views.generic import CreateView
from .forms import TaskCreate
from .models import Task

class TaskCreateView(CreateView):
    model = Task
    form_class = TaskCreate
    success_url = '/admin/service/task/'
