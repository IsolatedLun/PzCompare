release: python pzApi/manage.py migrate
web: gunicorn -b 127.0.0.1:8000 --pythonpath pzApi/wsgi.py