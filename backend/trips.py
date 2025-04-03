from flask import Flask, jsonify

app = Flask(__name__)

def get_trips():
    return jsonify({"message": "Hello, how can I help you today?"})
