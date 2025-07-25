import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Login from './userData';


const app = express();

dotenv.config();
mongoose.connect(process.env.MONGO_URI).
    then(() => {console.log("We've connected to mongodb")})


app.get("/", (req, res) =>{
    //this is just in the console of editor
    console.log("WE'RE IN!!!")
    
    //this actually puts some text on the page
    res.send("WHAtS up")
})

app.post('/', (req, res) =>{
    const {name, email, password} = req.body
    Login.create(req.body)

})


app.listen(5008, ()=>{
    console.log("We started a server on localhost:5008")
})