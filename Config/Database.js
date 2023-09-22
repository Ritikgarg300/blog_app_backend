
const mongoose= require('mongoose');
require('dotenv').config();
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{console.log("db connect successfully")})
    .catch((error)=>{
  console.error(error);
  console.log("unsuccessful")
    }
    )
}

module.exports=dbconnect;