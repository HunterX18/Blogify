
from typing import Annotated
from sqlalchemy.orm import Session
from fastapi import Depends
from .db_connection import Base, SessionLocal, engine

def init_db():
    Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]