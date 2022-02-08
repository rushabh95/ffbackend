const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    fullname: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    companyname: {
        type:String,
        required:true
    },
    passowrd: {
        type:String,
        required:true
    }
})

const User = mongoose.model('users',userSchema)

module.exports = User