from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

db_username = "postgres"
db_password = "postgres"
db_host = "blogify.ctqc0q4eiap1.ap-south-1.rds.amazonaws.com"
db_port = "5432"
db_name = "Blogify"

db_url = f'postgresql://{db_username}:{db_password}@{db_host}:{db_port}/{db_name}'

engine = create_engine(db_url)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()