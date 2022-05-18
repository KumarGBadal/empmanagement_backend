const mongoose = require('mongoose')
const signupSigninSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        min: 6,
        max:255
    },
    email:{
        type:String,
        required: true,
        min: 8,
        max:55
    },
    adress:{
        type:String,
        required: true,
        min: 6,
        max:255
    },
    password:{
        type:String,
        required: true,
        min: 8,
        max:60
    },
    confirmPassword:{
        type:String,
        required: true,
        min: 8,
        max:60
    }
})

module.exports = mongoose.model("Employee",signupSigninSchema)