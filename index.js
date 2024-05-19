const express = require("express");

const app = express();
const path = require('path');
require("dotenv").config();

app.use(express.json());

const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file


const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./connectMongo");
app.set('views', path.join(__dirname, 'views'));
connectDB();

const BookModel = require("./models/book.model");
const redis = require('./redis')

app.get('/',function(req,res){
  try{

  
  res.render('login')
  }catch(error){
    res.send(error)
  }
})
app.post('/',async function(req,res){
    const {email,password}=req.body;
    console.log(email,password)
  try{

  
  const result= new BookModel({email,password});
  const re=await result.save();
  if(re){
    res.send("Data save")
  }
  else{
    res.send('got some error')
  }
}catch(error){
  res.send(error)
}


})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
