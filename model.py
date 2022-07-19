from enum import unique
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, timezone, timedelta

db = SQLAlchemy()


class User(db.Model):
    """Data Model for a User."""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

    chapters = db.relationship('Chapter', back_populates='user')
    entries = db.relationship('Entry', back_populates='user')

    def to_dict(self):
        return { "user_id": self.user_id, 
                 "email": self.user_email, 
                 "password": self.user_password
                }

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

    def to_dict(self):
        return {"chapter_id": self.chapter_id,
                "user_id": self.user_id,
                "title": self.title,
                "playlist": self.playlist,
                "cover_image": self.cover_image
                }


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
    images = db.relationship("Image", back_populates='entry')
    
    def to_dict(self):
        return {"entry_id": self.entry_id,
                "body": self.body,
                "title": self.title,
                "user_id": self.user_id,
                "chapter_id": self.chapter_id
                }

class Image(db.Model):
    """Data Model for an Image"""

    __tablename__ = "images"

    image_id = db.Column(db.Integer, primary_key=True, autoincrement=True, nullable=False)
    image = db.Column(db.String, nullable=False)
    entry_id = db.Column(db.Integer, db.ForeignKey("entries.entry_id"), nullable=False)
    # do we want to have a user id on this table?

    entry = db.relationship("Entry", back_populates='images')

    def to_dict(self):
        return {"image_id": self.image_id,
                "image": self.image,
                "entry_id": self.entry_id
                }

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