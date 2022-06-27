const express = require("express")
const app = express();

app.get("/", function(req, res){
    res.send('Hello Reactor Demo Starter')
})

app.listen(5000, function(){
    console.log("Server is up and running")
})