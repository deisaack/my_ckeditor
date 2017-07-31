from django.conf.urls.static import static
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.contrib.admin.views.decorators import staff_member_required
from django.views.decorators.cache import never_cache

from ckeditor_uploader import views as ck_views

urlpatterns = [
    url(r'^ckeditor/upload/', ck_views.upload, name='ckeditor_upload'),
    url(r'^ckeditor/browse/', ck_views.browse, name='ckeditor_browse'),
    url(r'^admin/', admin.site.urls),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
    url(r'^service/', include('service.urls', namespace='services')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
