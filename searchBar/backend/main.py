from fastapi import FastAPI, Query, HTTPException
from motor.motor_asyncio import AsyncIOMotorClient
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

MONGO_DETAILS = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_DETAILS)
db = client.ReactDB 
collection = db.SearchBar  

class SearchResult(BaseModel):
    _id: str
    code: str
    shortDescription: str
    longDescription: str
    version: str

@app.get("/search", response_model=List[SearchResult])
async def search_items(
    query: str = Query(..., min_length=1),  
    skip: int = 0,  
    limit: int = 10 
):
    if limit > 100:
        raise HTTPException(status_code=400, detail="Limit cannot exceed 100")
    
    regex_query = {"$regex": query, "$options": "i"}  

    cursor = collection.find({
        "$or": [
            {"code": regex_query},
            {"shortDescription": regex_query},
            {"longDescription": regex_query}
        ]
    }).skip(skip).limit(limit)  

    results = []
    async for document in cursor:
        results.append(SearchResult(
            _id=str(document["_id"]),  
            code=document["code"],
            shortDescription=document["shortDescription"],
            longDescription=document["longDescription"],
            version=document["version"]
        ))

    if not results:
        raise HTTPException(status_code=404, detail="No records found")

    return results



@app.get("/searchall", response_model=List[SearchResult])
async def search_all_items(skip: int = 0, limit: int = 300):
    cursor = collection.find().skip(skip).limit(limit) 

    results = []
    async for document in cursor:
        results.append(SearchResult(
            _id=str(document["_id"]), 
            code=document["code"],
            shortDescription=document["shortDescription"],
            longDescription=document["longDescription"],
            version=document["version"]
        ))

    if not results:
        raise HTTPException(status_code=404, detail="No records found")

    return results