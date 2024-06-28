const express = require("express");//importing express functionn and storing it inside a variable called express

const app = express(); //renaming the function as app for reusability
app.get("/", (req, res)=>{
    res.send("Hi there");
});//client sees

app.listen(4000, "127.0.0.1", ()=>
{
   console.log("Server started at port 4000 successfully");
});//server sees
