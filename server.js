const express = require('express')
const app = express()

var dbconnection = require('./db')

app.get("/",(req,res)=>{
    res.send('This is from backend')
})


const port = process.env.PORT || 5000

app.listen(port,()=>`server is running at port ${port}`)