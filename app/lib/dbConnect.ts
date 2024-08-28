import { MongoClient, Collection } from "mongodb"
import * as dotenv from "dotenv"

export const collections: { projects?: Collection } = {}

export default async function connectToDB () {
    dotenv.config();
 
    const client: MongoClient = new MongoClient(process.env.DB_CONN_STRING!);
            
    try {
        await client.connect();
        console.log(`Successfully connected to database`);
    } catch(err) {
        console.error(err);
    }    

    return client;
 }

