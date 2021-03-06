
import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import {StreamChat}from "stream-chat";
import {v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
const app =express();




app.use(cors());
app.use(express.json());
const api_key= process.env.API_KEY;
const api_secret=process.env.API_SECRET;
const ServerClient=StreamChat.getInstance(api_key,api_secret)

app.post ("/signUp", (req,res) =>{
    try{
    const {firstName, lastName, username,password}= req.body;
    const userId= uuidv4();
    const hashedPassword = bcrypt.hash(password,10);
    const token = ServerClient.createToken(userId);
    res.json({token,userId,firstName,lastName,username,hashedPassword});
    }
    catch (error){res.json(error)}

})
app.post("/login", (req,res)=>{})
app.listen(3001, () =>{
    console.log("Server is running on the port 3001");
});