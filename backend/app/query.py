CREATE_TABLE_QUERY = """
CREATE TABLE IF NOT EXISTS trips (
    id SERIAL PRIMARY KEY,
    trip_title VARCHAR(255) NOT NULL,
    start_date DATE NOT NULL,
    number_of_days INT NOT NULL,
    destination VARCHAR(255) NOT NULL,
    trip_type VARCHAR(50) CHECK (trip_type IN ('Family', 'Solo', 'Friend')),
    budget VARCHAR(100),
    custom_budget INT,
    number_of_adults INT DEFAULT NULL,
    number_of_children INT DEFAULT NULL,
    number_of_friends INT DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
"""
INSERT_TRIP_QUERY = """
INSERT INTO trips (trip_title, start_date, number_of_days, destination, trip_type, budget, custom_budget, number_of_adults, number_of_children, number_of_friends)
VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
"""


GET_TRIPS_QUERY = """SELECT * FROM trips"""

