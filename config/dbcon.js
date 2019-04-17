const mongoose = require('mongoose');
const bluebird =require('bluebird');

mongoose.Promise = bluebird;
mongoose.connect('mongodb://localhost:27017/prodcuts',{ useNewUrlParser: true } ,(err,result) => {
    if(err){
        console.log("database connection error");
    }else{
        console.log("database connected successfully");
    }
})

module.exports = mongoose;