"""Script to seed database."""

import os
import json
from datetime import datetime

from model import *
import server

os.system('dropdb musicjournal')
os.system('createdb musicjournal')

connect_to_db(server.app)
db.create_all()




baby = User(user_email='baby@baby.com', user_password='screamallday')
db.session.add(baby)
db.session.commit()