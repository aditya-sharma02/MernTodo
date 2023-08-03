const dotenv = require("dotenv").config()
const mongoose = require("mongoose")


mongoose.connect(process.env.MONGODBURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log("connection with mongodb established")
}).catch((e) => console.log(e));``