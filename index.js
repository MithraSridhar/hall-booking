import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
import cors from "cors";
import { getRoom, createRoom } from "./helper.js";

const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json()); //interpreter //converting body to json
//app.use(express.urlencoded());
//connecting to MongoDB
// Connection URL
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  client.connect();
  console.log("MONGODB conected");
  // console.log(client)
  return client;
}

export const client = await createConnection();

//default path
app.get("/", (req, res) => {
  res.send("Welcome to Hallbooking App");
});

//get room
app.get("/room", async (req, res) => {
  const result = await getRoom();
  res.send(result);
  console.log(result);
});

//create room
app.post("/createroom", async (req, res) => {
  const result = await createRoom(req.body);
  res.send({ success: true, message: "Room Created Successfully" });
});

//book room
app.post("/bookroom",async (req,res)=>{
    const{id,customer_name,room_id,starttime,endtime,date}=req.body;
    console.log(id,customer_name,room_id,starttime,endtime,date)
    
    res.send("Done")
})

app.listen(PORT, () => console.log("Server started in the port ", PORT)); //port number to listen
