from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cidei.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^app/', include('app.urls')),
    url(r'^accounts/', include('accounts.urls')),
)

if settings.DEBUG:
    urlpatterns+= patterns(
        'django.views.static',
        (r'media/(?P<path>.*)',
        'serve',
        {'document_root':settings.MEDIA_ROOT}),
    )


