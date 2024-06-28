const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const SignUp = require("./models/Person");
const router = require("./routes/User");
const mobileRouter = require("./routes/Mobiles");
require("dotenv").config();




const port  = process.env.PORT || 8080;
const mongodbURL = process.env.DB_URL;
// const mongodbURL = "mongodb://127.0.0.1:27017"

const app = express();
// database connection 
mongoose.connect(mongodbURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 30000
}).then((res)=>{
  console.log("database connected success")
}).catch((err)=>{
  console.log(err)
});
app.set("bufferTimeoutMs",30000);





app.use(bodyParser.json())

app.get("/",(req,res)=>{
   res.send("Hello backend")
});



app.use("/users",router);
app.use("/mobile",mobileRouter);





app.listen(port,()=>{
  console.log(`server Running on port ${port}`)
})