const mongoose = require("mongoose");

const connectDB = async (uri)=>{
    return await mongoose
    .connect(uri)
    .then(()=>console.log("DB connected"))
    .catch((err)=>console.log(err))
}

module.exports = connectDB;