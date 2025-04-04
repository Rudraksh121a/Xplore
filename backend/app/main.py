from flask import Flask
from api.trips import trip_api    # ✅ Import the Blueprint

app = Flask(__name__)

# ✅ Register Blueprint
app.register_blueprint(trip_api)

if __name__ == "__main__":
    app.run(debug=True)
