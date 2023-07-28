const mongoose = require('mongoose')
const Detail = mongoose.Schema({
    brandName: String,
    brandIconUrl: String,
    links: [
    {
        label: String,
        url: String
    },
],
})
//mongoose.model is used to create a collection in the database

// That means this code will create a Colleection Name "(details)" and apply the "(Detail)" on that collection 
module.exports = mongoose.model("detail" , Detail)
