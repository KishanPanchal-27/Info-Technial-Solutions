const mongoose = require('mongoose')
const Slider = mongoose.Schema({
    title : String,
    subTitle : String,
    imageUrl:String,
    class:String
})
//mongoose.model is used to create a collection in the database

// That means this code will create a Colleection Name "(sliders)" and apply the "(Slider)" on that collection 
module.exports = mongoose.model('slider' ,Slider)