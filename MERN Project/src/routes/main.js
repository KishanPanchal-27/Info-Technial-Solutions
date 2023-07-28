const express = require('express')
const routes = express.Router()
const slider = require("../models/slider")
const Detail = require("../models/Detail")
const services = require("../models/service") 
const Contact = require("../models/contact") 
const Banner2 = require("../models/banner2")






routes.get('/',async (req,res)=>{
    //--------------------------------------------------------------------------------
    // WHAT IS FINDONE METHOD : 
    //        The findOne() function is used to find One Document according to the condition & Get the data from the collection 
    //-------------------------------------------------------------------------------- 
    // That means this code will get the DATA from the "(details Collection)" and store the data in details
   const details = await Detail.findOne({"_id" : "64c0e3f64c5680a6377f1075"});
   const slides = await slider.find();
   const service = await services.find();
   const banner2 = await Banner2.find();
   res.render("index",{
    details : details,  // Here we are passing the data to index.hbs file
    slides : slides ,   // Here we are passing the data to index.hbs file
    service : service,  // Here we are passing the data to index.hbs file
    banner2 : banner2   // Here we are passing the data to index.hbs file
    })
})

routes.get('/gallery',async(req,res)=>{
    const details = await Detail.findOne({"_id" : "64c0e3f64c5680a6377f1075"})


    res.render("gallery",{
        details : details,  // Here we are passing the data to gallery.hbs file
        
       })
})

routes.post('/process-contact-form',async (req,res)=>{
    console.log("This for is submitted")
    console.log(req.body)
    // Save the data to DB
    try {
        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect('/')


    } catch (error) {
        console.log(error)

        res.redirect('/')
    }
})


module.exports = routes; 