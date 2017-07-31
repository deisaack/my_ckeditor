from django.conf.urls.static import static
from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^task/create/$', views.TaskCreateView.as_view()),
]
