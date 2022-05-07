const express=require("express")
const cors=require("cors");

const app=express()
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  app.use(cors())

const { register, login } = require("./src/controllers/Authcontroller");

app.post("/register", register);
app.post("/login", login);

app.get("/",(req,res)=>{
    res.send("welcome Nykaaman.com clone")
    })
module.exports = app;