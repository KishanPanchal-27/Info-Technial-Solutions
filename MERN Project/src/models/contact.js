const mongoose = require("mongoose")

const Contact = mongoose.Schema({
    email:String,
    phone:String,
    query:String
})
//mongoose.model is used to create a collection in the database

// That means this code will create a Colleection Name "(contacts)" and apply the "(Contact)" on that collection 
module.exports = mongoose.model('contact',Contact)