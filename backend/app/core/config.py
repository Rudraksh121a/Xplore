import os
from dotenv import load_dotenv

load_dotenv()

API_VERSION = "v1"
DB_URL = os.getenv("DATABASE_URL", "sqlite:///./test.db")
