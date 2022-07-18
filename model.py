from enum import unique
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone, timedelta

db = SQLAlchemy()


class User(db.Model):
    """Data Model for a User."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    user_email = db.Column(db.String(100), nullable=False, unique=True)
    user_password = db.Column(db.String(100), nullable=False)





def connect_to_db(app, db_uri = "musicjournal" ):
    """Connect the database to our Flask app."""

    app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql:///{db_uri}'
    app.config['SQLALCHEMY_ECHO'] = False
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == '__main__':
    from server import app
    connect_to_db(app)
    db.create_all()
    print('Connected to DB!')