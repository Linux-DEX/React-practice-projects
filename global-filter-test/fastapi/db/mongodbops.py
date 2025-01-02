import motor.motor_asyncio
from bson.objectid import ObjectId
import logging 
import master_utils as mu

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)
handler = logging.StreamHandler()
formatter = logging.Formatter('%(levelname)s - %(filename)s - %(message)s')
handler.setFormatter(formatter)
logger.addHandler(handler)

async def openConnection():
    try:
        client = motor.motor_asyncio.AsyncIOMotorClient(#) # add connection string here
        logger.info("Database connection opened successfully.")
        return client
    except Exception as e:
        logger.error(f"Error opening database connection: {str(e)}")
        pass
   
async def closeConnection(client):
    if client is None:
        pass
    else:
        try:
            await client.close()
            logger.info("Database connection closed successfully.")
        except Exception as e:
            # logger.error(f"Error closing database connection: {str(e)}")
            pass
    
async def getCollection(client,dbName,collectionName):
    try:
        database = client[dbName]
        collection = database[collectionName]
        logger.info(f"Accessed collection: {collectionName} in database: {dbName}.")
        return collection
    except Exception as e:
        logger.error(f"Error accessing collection {collectionName}: {str(e)}")
        raise

async def find(dbName,collectionName,filter={},sort=None,rowsPerPage=20,pageno =1,selectFields =[]):   
    try:

        year_of_service = int(mu.YEAR_OF_SERVICE)
        print(f"""

            year of service mongodb ops file -> {year_of_service}

              """)
        logger.info(f"Finding documents in collection: {collectionName} with filter: {filter} and sort: {sort}.")
        if type(rowsPerPage) == str:
            rowsPerPage = int(rowsPerPage)
        if type(pageno) == str:
            pageno = int(pageno)
        if type(filter) == str:
            filter = dict(filter)
        if type(sort) == str:
            sort = dict(sort)
        if type(selectFields) == str:
            selectFields = list(selectFields)
        if sort != None:
            for key, value in sort.items():
                if value == 'desc':
                    sort[key] = -1
                else:
                    sort[key] = 1
        client = await openConnection()
        collection = await getCollection(client,dbName,collectionName)
        filter['yearOfService'] = year_of_service
        if sort==None:
            result = await collection.find(filter,selectFields).limit(rowsPerPage).skip(rowsPerPage * (pageno - 1)).to_list(length=None)
        else:
            result = await collection.find(filter,selectFields).sort(sort).limit(rowsPerPage).skip(rowsPerPage * (pageno - 1)).to_list(length=None)
        await closeConnection(client)
        logger.info(f"Found {len(result)} documents.")
        return result
    except Exception as e:
        logger.error(f"Error finding documents: {str(e)}")
        raise

async def distinct(dbName,collectionName,filter,distinctField):
    try:
        logger.info(f"Finding distinct values for field {distinctField} in collection: {collectionName} with filter: {filter}.")
        if type(filter) == str:
            filter = dict(filter)
        client = await openConnection()
        collection = await getCollection(client,dbName,collectionName)
        result = await collection.distinct(distinctField,filter)
        await closeConnection(client)
        logger.info(f"Distinct values found: {result}.")
        return result
    except Exception as e:
        logger.error(f"Error finding distinct values: {str(e)}")
        raise

async def findOne( dbName,collectionName,filter={},selectFields=[]):
    try:
        logger.info(f"Finding one document in collection: {collectionName} with filter: {filter}.")
        if type(filter) == str:
            filter = dict(filter)
        if type(selectFields) == str:
            selectFields = list(selectFields)
        client = await openConnection()
        collection = await getCollection(client,dbName,collectionName)
        result = await collection.find_one(filter, selectFields)
        await closeConnection(client)
        logger.info(f"Document found: {result}.")
        return result
    except Exception as e:
        logger.error(f"Error finding document: {str(e)}")
        raise
    
async def count(dbName,collectionName,filter={}):
    try:
        logger.info(f"Counting documents in collection: {collectionName} with filter: {filter}.")
        if type(filter) == str:
            filter = dict(filter)
        client = await openConnection()
        collection = await getCollection(client,dbName,collectionName)
        result = await collection.count_documents(filter)
        await closeConnection(client)
        logger.info(f"Document count: {result}.")
        return result
    except Exception as e:
        logger.error(f"Error counting documents: {str(e)}")
        raise

