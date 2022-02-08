const mongoose = require('mongoose')

var mongoDBURL='mongodb+srv://rushabh:rushabh@cluster0.ywr6y.mongodb.net/FeedFleet'

mongoose.connect(mongoDBURL,{useUnifiedTopology:true, useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error',()=>{
    console.log('mongodb conection failed')
})

dbconnect.on('connected',()=>{
    console.log('mongodb conection successfull')
})
module.exports = mongoose