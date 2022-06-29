from flask import Flask, render_template, jsonify
from mockData import kats_chapter, trews_chapter

app = Flask(__name__)

@app.route("/")
def homepage():
    """Simple greeting. Book Cover"""

    return render_template("base.html")

@app.route("/table-of-contents.json")
def toc():
    """Returns chapters"""

    return jsonify([kats_chapter, trews_chapter])


if __name__ == "__main__":
    app.run(debug=True)