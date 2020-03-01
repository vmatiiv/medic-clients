const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    surname:String,
    country:String,
    birthday:String,
    sex:String,
    state:String,
    address:String,
    id:String,
    comments:[{}]
})


module.exports =  mongoose.model('users',userSchema);