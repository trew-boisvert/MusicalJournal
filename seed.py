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




baby = User(email='baby@baby.com', password='screamallday')
baby.chapters.append(Chapter(title="Launchtime", playlist="snackradio", cover_image="asmr of people crunching"))


chap = Chapter(user=baby, title="The sleepiest", playlist="songzzzz", cover_image="piczzzzz")
chap.entries.append(Entry(body="bodyodyodyodyodyodyody", title="the greatest show", user_id=1))
c = Chapter(title="Low Energy Data Modeling Monday Mornin'", user_id=1, playlist="long string yay", cover_image="also a string")

combo = Entry(user=baby, chapter=c, body="dodododoododododo baby shark", title="jaws")

combo.images.append(Image(image="picture url, for reals"))

db.session.add_all([baby, c, combo])

db.session.commit()