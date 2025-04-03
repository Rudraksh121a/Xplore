from flask import Flask, request, jsonify
import os
import dotenv
from flask_cors import CORS

dotenv.load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['GET'])
def chat():
    return jsonify({"message": "Hello, how can I help you today?"})

if __name__ == '__main__':
    app.run(debug=True)

