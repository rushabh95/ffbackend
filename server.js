const express = require('express')
const bodyParser = require("body-parser")
const app = express()

var dbconnection = require('./db')
var userRoute = require('./routes/userRoute')
require('./models/userModel')
app.use(bodyParser.json())
app.use(express.json())
app.use('/api/signup',userRoute)

app.get("/",(req,res)=>{
    res.send('This is test')
})


const port = process.env.PORT || 5000

app.listen(port,()=>`server is running at port ${port}`)