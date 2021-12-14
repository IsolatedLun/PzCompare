release: python pzApi/manage.py migrate
web: gunicorn --pythonpath -b 127.0.0.1:8000 pzApi/wsgi.py