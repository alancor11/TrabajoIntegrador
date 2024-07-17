from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

from django.shortcuts import render, redirect
from .models import Post
from .forms import PostForm

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_posts')  # Redirigir a la lista de posts
    else:
        form = PostForm()
    return render(request, 'create_post.html', {'form': form})

from django.urls import path
from . import views

urlpatterns = [
    path('posts/create/', views.create_post, name='create_post'),
    # Define otras URLs para actualizar, borrar, listar, etc.
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',  # Motor de la base de datos MySQL
        'NAME': 'nombre_de_tu_base_de_datos',  # Nombre de la base de datos MySQL
        'USER': 'tu_usuario_de_mysql',         # Usuario de MySQL
        'PASSWORD': 'tu_contraseña_de_mysql',  # Contraseña de MySQL
        'HOST': 'localhost',                   # Dirección del servidor de la base de datos (puede ser localhost si estás desarrollando localmente)
        'PORT': '3306',                        # Puerto de la base de datos MySQL (el predeterminado es 3306)
    }
}

# settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'nombre_de_tu_base_de_datos',
        'USER': 'tu_usuario_de_mysql',
        'PASSWORD': 'tu_contraseña_de_mysql',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}

