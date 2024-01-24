from fastapi import APIRouter, HTTPException
from models.PostModel import PostModel
from database.db import db_dependency
from schemas.CreatePost import CreatePost
from schemas.UpdatePost import UpdatePost

router = APIRouter(
    prefix="/posts"
)

@router.get("/")
def getPosts(db: db_dependency):
    posts = db.query(PostModel).all()
    return posts

@router.post("/")
def postPosts(post: CreatePost, db: db_dependency):
    db_post = PostModel(title=post.title, body=post.body)
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post


@router.get("/{post_id}")
def getPost(post_id: int, db: db_dependency):
    db_post = db.query(PostModel).filter(PostModel.id == post_id).first()
    if db_post is None:
        raise HTTPException(status_code=400, detail={"error": "Item not found"})
    return db_post

@router.put("/{post_id}")
def updatePost(post_id: int, post: UpdatePost, db: db_dependency):
    db_post = db.query(PostModel).filter(PostModel.id == post_id).first()

    if db_post is None:
        raise HTTPException(status_code=400, detail={"Error": "Item not found"})
    
    for key, val in post:
        if val is not None:
            setattr(db_post, key, val)
    
    db.commit()
    db.refresh(db_post)
    return db_post


@router.delete("/{post_id}")
def deletePost(post_id, db: db_dependency):
    db_post = db.query(PostModel).filter(PostModel.id == post_id).first()

    if db_post is None:
        raise HTTPException(status_code=400, detail={"Error": "Item not found"})
    
    db.delete(db_post)
    db.commit()
    return db_post
