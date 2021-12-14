release: python manage.py migrate
web: gunicorn --bind 127.0.0.1:8000 pzApi.wsgi:application