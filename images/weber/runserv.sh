#!/bin/bash
# ...
cd /$PROJECT
source .env/$PROJECT/bin/activate     
# ..
./manage.py runserver 0.0.0.0:8000