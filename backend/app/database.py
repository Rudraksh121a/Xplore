import psycopg2
from app.config import DBNAME, USER, PASSWORD, HOST, PORT

def get_db_connection():
    try:
        conn = psycopg2.connect(
            dbname=DBNAME,
            user=USER,
            password=PASSWORD,
            host=HOST,
            port=PORT
        )
        return conn
    except Exception as e:
        print(f"❌ Database connection error: {e}")
        return None
