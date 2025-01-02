from fastapi import APIRouter
import master_utils as mu

route = APIRouter()

@route.get('/admin')
async def admin_route():
    return { "message": "admin route", 'yearOfService': mu.YEAR_OF_SERVICE }
