from flask import Flask
from app.api.trips import trip_api    
import os
app = Flask(__name__)

#Register Blueprint
app.register_blueprint(trip_api)

PORT = int(os.getenv("APP_PORT", 5000))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=True)