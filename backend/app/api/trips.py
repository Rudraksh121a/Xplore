from flask import Blueprint, request, jsonify
from app.database import get_db_connection
from app.query import *


trip_api = Blueprint('trip_api', __name__)


@trip_api.route('/add-trip', methods=['POST'])
def add_trip():
    try:
        data = request.json

        # Extract fields
        trip_title = data.get("trip_title")
        start_date = data.get("start_date")
        number_of_days = data.get("number_of_days")
        destination = data.get("destination")
        trip_type = data.get("trip_type")
        budget = data.get("budget")
        custom_budget = data.get("custom_budget")
        number_of_adults = data.get("number_of_adults")
        number_of_children = data.get("number_of_children")
        number_of_friends = data.get("number_of_friends")

        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500

        cur = conn.cursor()
        cur.execute(INSERT_TRIP_QUERY, (trip_title, start_date, number_of_days, destination, trip_type, budget, custom_budget, number_of_adults, number_of_children, number_of_friends))

        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "✅ Trip added successfully!"}), 201

    except Exception as e:
        return jsonify({"error": f"❌ Error adding trip: {e}"}), 500


# 📌 Get All Trips API
@trip_api.route('/get-trips', methods=['GET'])
def get_trips():
    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500

        cur = conn.cursor()
        cur.execute(GET_TRIPS_QUERY)
        trips = cur.fetchall()

        cur.close()
        conn.close()

        trip_list = []
        for trip in trips:
            trip_list.append({
                "id": trip[0],
                "trip_title": trip[1],
                "start_date": trip[2],
                "number_of_days": trip[3],
                "destination": trip[4],
                "trip_type": trip[5],
                "budget": trip[6],
                "custom_budget": trip[7],
                "number_of_adults": trip[8],
                "number_of_children": trip[9],
                "number_of_friends": trip[10],
                "created_at": trip[11]
            })

        return jsonify({"trips": trip_list}), 200

    except Exception as e:
        return jsonify({"error": f"❌ Error retrieving trips: {e}"}), 500
