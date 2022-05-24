const mongoose = require("mongoose")
const express = require("express");
const connectDatabase = require("./helpers/database/connectDatabase")
const Comments = require("./models/comment_model")
const path = require('path');


connectDatabase();
//require('./database');
const app = express();
const PORT = 5000; 
app.use(express.json())

app.use(express.static("public"));
// npm run dev
// package.json icinde "dev": "nodemon server.js"
app.listen(PORT, () => {
    console.log("App started on " + PORT);
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"./index.html"))
})

app.get("/commentspage",(req,res) => {
    res.sendFile(path.join(__dirname,"./comments.html"))
})


app.get("/comments",async(req,res) => {
  try {
      const comments =await Comments.find()
      res.status(200).json(comments)
  } catch (error) {
      res.status(500).json(error)
  }  

})


app.post("/addToDb",(req,res)=>{
    try {
    const comment = new Comments(req.body)

    comment.save((err, doc) => {
        if (err) { console.log(err) }
        else { console.log(doc) }
    })  
    res.status(200).json(comment)
    console.log("add2db")
    } catch (error) {
    res.status(500).json(error)
    }
})






