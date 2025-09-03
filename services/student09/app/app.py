from flask import Flask
app = Flask(__name__)

@app.get("/")
def index():
    return "Hello, I am Jose Adrian Marin 🐧"

@app.get("/health")
def health():
    return "ok"