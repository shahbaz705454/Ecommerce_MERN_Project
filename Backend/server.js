const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());




const PORT = 8000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running");
});
app.get("/",(req,resp)=>{
    resp.send(`<h1> This is home baby</h1>`)
});