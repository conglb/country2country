#### TODO
- realese v0.1
- init Github Action
- public using Github Pages


##### Setup
'''
python3.12 -v venv env
source env/bin/activate
pip3.12 install flask flask-cors
pip3.12 freeze > requirements.txt  
python3.12 app.py
# add sql to sqlite3_countries.sql
sqlite3 countries.db < sqlite3_countries.sql

'''

