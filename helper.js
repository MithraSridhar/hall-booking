import { client } from './index.js';


export async function createRoom(room) {
    return await client.db("hallbooking").collection("room").insertOne(room);
  }

  export async function getRoom() {
    return await client.db("hallbooking").collection("room").find().toArray();
  }  
  