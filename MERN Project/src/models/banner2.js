const mongoose = require("mongoose")

const Banner = mongoose.Schema({
    title:String,
    text:String,
    imgUrl:String
})
//mongoose.model is used to create a collection in the database

// That means this code will create a Colleection Name "(banner2)" and apply the "(Banner)" on that collection 
module.exports = mongoose.model('banner2',Banner)