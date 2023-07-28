const mongoose = require('mongoose')
const Service = mongoose.Schema({
    icon:String,
    title:String,
    description : String,
    linkText : String,
    link:String
})
//mongoose.model is used to create a collection in the database

// That means this code will create a Colleection Name "(services)" and apply the "(Service)" on that collection 
module.exports = mongoose.model("service",Service)