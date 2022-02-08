const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const User = require('../models/userModel')


router.post("/signup",(req,res)=>{
    
      const newuser = new User(req.body)

      newuser.save(err=>{
          if(!err){
              res.send('User Registration successfull')
          }else{
              res.send('something went wrong')
          }
      })
})

module.exports = router


