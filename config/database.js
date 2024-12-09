const mongoose = require('mongoose');

require("dotenv").config();
const dbconnect = ()=>{

    mongoose.connect(process.env.DATABASE,{
        useNewUrlparser:true,
        useUnifiedTopology:true,

    })
    .then( ()=>{
        console.log("db connectionn successfyll");
    })

    .catch((error) =>{
        console.log("db connection faceing issue");
        console.log(error);
        process.exit(1);
    }
    )
}
module.exports = dbconnect;