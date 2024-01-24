from typing import Annotated
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import posts
from models.PostModel import PostModel
from database.db import init_db
from sqlalchemy.orm import Session

origins = [
    "http://localhost:3000"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()

app.include_router(posts.router)

@app.get("/")
def index():
    return {'data': { 'name': "Working"}}
