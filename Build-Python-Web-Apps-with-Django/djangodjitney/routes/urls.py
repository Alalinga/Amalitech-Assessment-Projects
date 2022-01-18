from django.urls import path

from . import views

urlpatterns = [
  path('', views.HomeView.as_view(), name='home'),

          # Lines Urls
  path('lines/', views.LinesView.as_view(), name='lines'),
  path('lines/new', views.CreateLineView.as_view(), name='create_line'),
  path('lines/<pk>/update/', views.UpdateLineView.as_view(), name='update_line'),
  path('lines/<pk>/delete/', views.DeleteLineView.as_view(), name='delete_line'),

  # Station Urls

  path('stations/', views.StationsView.as_view(), name='stations'),
  path('stations/new', views.CreateStationsView.as_view(), name='create_station'),
  path('stations/<pk>/update/', views.UpdateStationsView.as_view(), name='update_station'),
  path('stations/<pk>/delete/', views.DeleteStationsView.as_view(), name='delete_station'),
  
  # Stop Urls
  path('stops/', views.StopView.as_view(), name='stops'),
  path('stops/new', views.CreateStopView.as_view(), name='create_stop'),
  path('stops/<pk>/update/', views.UpdateStopView.as_view(), name='update_stop'),
  path('stops/<pk>/delete/', views.DeleteStopView.as_view(), name='delete_stop'),
  
]

