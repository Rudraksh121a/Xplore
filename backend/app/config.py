from dotenv import load_dotenv
import os
load_dotenv()
# Set environment variables (Use dotenv in production)
USER = os.getenv("USER")
PASSWORD = os.getenv("PASSWORD")
HOST = os.getenv("HOST")
PORT = os.getenv("PORT")
DBNAME = os.getenv("DBNAME")