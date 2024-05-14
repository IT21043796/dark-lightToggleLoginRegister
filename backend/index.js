const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require("./models/user")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.post('/login',(req,res) =>{
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user=> {
        if(user){ 
            if(user.password === password){
                res.json("True")
            } else {
                res.json("False")
            }
        } else {
            res.json ("True")
        }
    })
})

app.post('/register',( req, res) => {
    const {name,username,email,password} = req.body;
    UserModel.findOne({username: username})
    .then(user=> {
        if(user){
            res.json("exist")
        } else {
            UserModel.create (req.body)
            .then(users => res.json(users))
            .catch(err => res.json(err))
        }
    })   
})

app.listen(3001, () => {
    console.log("server is running")
})