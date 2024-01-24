from pydantic import BaseModel

class UpdatePost(BaseModel):
    title: str | None = None
    body: str | None = None