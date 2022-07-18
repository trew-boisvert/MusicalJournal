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

    chapters = db.relationship('Chapter', back_populates='user')
    entries = db.relationship('Entry', back_populates='user')

class Chapter(db.Model):
    """Data model for a chapter"""

    __tablename__ ="chapters"

    chapter_id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    user_id = db.Column(db.Integer,  db.ForeignKey('users.user_id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    playlist = db.Column(db.String, nullable=False)
    cover_image = db.Column(db.String, nullable=False)

    user = db.relationship('User', back_populates='chapters')
    entries = db.relationship('Entry', back_populates='chapter')


class Entry(db.Model):
    """Data Model for an entry."""
    
    __tablename__ = "entries"

    entry_id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    body = db.Column(db.String, nullable=False)
    title = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer,  db.ForeignKey('users.user_id'), nullable=False)
    chapter_id = db.Column(db.Integer,  db.ForeignKey('chapters.chapter_id'), nullable=False)

    user = db.relationship('User', back_populates='entries')
    chapter = db.relationship('Chapter', back_populates='entries')

# TODO class Image(db.Model)

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