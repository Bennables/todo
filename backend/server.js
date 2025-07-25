import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Login from './userData.js';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());


dotenv.config();
mongoose.connect(process.env.MONGO_URI).
    then(() => {console.log("We've connected to mongodb")})


app.get("/", (req, res) =>{
    //this is just in the console of editor
    console.log("WE'RE IN!!!")
    
    //this actually puts some text on the page
    res.send("WHAtS up")
})

app.post('/register', async (req, res) =>{
    console.log(req.body);
    const {email, username, password} = req.body
    console.log("Got here")
    await Login.create({email, username, password})
    console.log("Tried to create");
    res.send("DONE")
})

app.post('/login', async (req,res) => {
    console.log("WE RUNNIGN IT")
    const {username, password} = req.body;
    await Login.findOne({username:username})
    .then(user => {
        if (user){
            if (user.password == password){
                res.json("Success");
                console.log("Found one!")
            }
            else{
                res.json("Incorrect password")
                console.log("Aint none")
            }
        }
        else{
            res.json("No user found")
        }
    })
    .catch(e=>
        res.json("Somethign went wrong" + e)
    )})


app.listen(5008, ()=>{
    console.log("We started a server on localhost:5008")
});