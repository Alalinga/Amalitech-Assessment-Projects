from django.urls import path
from .views import fortune

urlpatterns =[
  path("", fortune, name='fortune')

]
