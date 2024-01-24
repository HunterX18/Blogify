from sqlalchemy import Column, String, Integer
from database.db_connection import Base

class PostModel(Base):
    __tablename__ = "Posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    body = Column(String)
