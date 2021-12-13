from django.urls import path, re_path
from . import views

urlpatterns = [
    path('<str:obj_1>/with/<str:obj_2>', views.CompareObjs.as_view())
]