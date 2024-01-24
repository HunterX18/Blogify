from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import posts
from database.db import init_db

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

init_db()

app.include_router(posts.router)

@app.get("/")
def index():
    return {'data': { 'name': "Working"}}
