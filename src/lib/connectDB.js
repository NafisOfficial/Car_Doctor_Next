const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


let DB;

export const connectDB = async () => {

    const uri = process.env.DB_CONNECTION_STRING;
    if(DB){
        return DB;
    }

    try{
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        DB = await client.db("CarDoctor");

        return DB
    }catch(error){
        console.log(error);
    }
    
}