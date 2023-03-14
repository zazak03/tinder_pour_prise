from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route("/")
def index():
    return "hello world"


app.debug = True
app.run(host='0.0.0.0', port=5000)