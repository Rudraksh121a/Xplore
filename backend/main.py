from flask import Flask
from flask_cors import CORS
import chatbot
import trips

app = Flask(__name__)
CORS(app)

app.register_blueprint(chatbot.bp)
app.register_blueprint(trips.bp)

if __name__ == '__main__':
    app.run(debug=True)
