from sqlalchemy import create_engine, MetaData
from app.core.config import DB_URL

engine = create_engine(DB_URL)
metadata = MetaData()
