from fastapi import FastAPI, Response, Request, Depends, Cookie
from starlette.middleware.base import BaseHTTPMiddleware 
from starlette.requests import Request 
from starlette.responses import Response 
from pydantic import BaseModel, Field
from typing import Optional, Any, Dict
from fastapi.middleware.cors import CORSMiddleware
import master_utils as mu
import admin 
from db.mongodbops import * 
import json 
from bson import json_util

app = FastAPI()

app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
        )

class AddHeaderMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        header = dict(request.headers)

        mu.YEAR_OF_SERVICE = header.get("year_of_service")

        response = await call_next(request)
        return response 

app.add_middleware(AddHeaderMiddleware)

app.include_router( admin.route , prefix='/api', tags=['admin api'])

@app.get("/")
async def read_root():
    documents = await find(dbName='sarabjeet_demo', collectionName='charts', selectFields=['projectID', 'yearOfService', 'memberFullName', 'status'])
    data = json_util.dumps(documents)
    json_data = json.loads(data)
    print(f"""

        data length -> {len(json_data)}

          """)
    return {
            "success": True ,
            "message": "root api",
            'year_of_service': mu.YEAR_OF_SERVICE,
            'data': json_data 
            }

@app.get('/list')
async def list_data():
    return {
            "success": True,
            "message": "List api called",
            'year_of_service': mu.YEAR_OF_SERVICE
            }
