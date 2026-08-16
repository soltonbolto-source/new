from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ContactMessageViewSet

router = DefaultRouter()
router.register(r'contacts', ContactMessageViewSet, basename='contacts')

urlpatterns = [
    path('', include(router.urls)),
]
