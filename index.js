const express=require("express")
const cors=require("cors");
const productcontroller=require("./src/controllers/productcontroller")
const app=express()
app.use(express.json());

app.use(ignoreFavicon);
 function ignoreFavicon(req, res, next) {
  if (req.originalUrl.includes('favicon.ico')) {
    res.status(204).end()
  }
  next();
}
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  app.use(cors())

const { register, login } = require("./src/controllers/Authcontroller");
// const { default: Home } = require("./frontend/src/components/Home");

app.post("/register", register);
app.post("/login", login);

// // app.use("/home",Home)


// app.use("/product",productcontroller)

app.get("/",(req,res)=>{
    res.send("welcome Zara.com clone")
    })
module.exports = app;