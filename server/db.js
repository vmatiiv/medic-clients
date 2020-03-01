const mongoose = require('mongoose');
require('dotenv').config()


const db = mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('mongoose connected'))
.catch((err)=>console.log(err));


module.exports = db;