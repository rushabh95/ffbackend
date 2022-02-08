const mongoose = require('mongoose')

var mongoDBURL='mongodb+srv://admin:12@cluster0.se1gk.mongodb.net/horizontal?retryWrites=true&w=majority'

mongoose.connect(mongoDBURL,{useUnifiedTopology:true, useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error',()=>{
    console.log('mongodb conection failed')
})

dbconnect.on('connected',()=>{
    console.log('mongodb conection successfull')
})

module.exports = mongoose