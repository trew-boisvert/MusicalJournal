from crypt import methods
from flask import Flask, render_template, jsonify, session, request
from model import connect_to_db, db, User
from mockData import kats_chapter, trews_chapter

app = Flask(__name__)

app.secret_key ="stringitystring"

@app.route("/")
def homepage():
    """Simple greeting. Book Cover"""

    return render_template("base.html")

@app.route("/table-of-contents.json")
def toc():
    """Returns chapters"""

    return jsonify([kats_chapter, trews_chapter])

@app.route("/login", methods=['POST'])
def login():
    """Login a user"""

    password = request.json.get("password")
    email = request.json.get("email")

    user = User.get_by_email(email=email)

    if user is None:
        return jsonify({"status": 400, "message": "email not found"})
    elif user.password == password:
        session["user_id"] = user.user_id
        return jsonify({"status": 200, "message": "Welcome in!"})

    return jsonify({"status": 400, "message": "wrong password"})

if __name__ == "__main__":
    connect_to_db(app)
    app.run(debug=True)