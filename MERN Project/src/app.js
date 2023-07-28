const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectToMongo = require('./db')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const routes = require("./routes/main")
const Detail = require("./models/Detail")


//--------------------------------------------------------------------------------
// This code is used because it is not Compulsory that a paticular port is available in Production Server
// In that case we have to check the Environment Variable & if the PORT is already set then user that
// Otherwise Use 3000
//--------------------------------------------------------------------------------
const port = process.env.PORT || 3000


app.get('/about',(req,res)=>{
    res.send("Hello i am home page:")
})
app.use(bodyParser.urlencoded({
    extended : true
})) 

app.use('/',routes)



//--------------------------------------------------------------------------------
// This is a Middleware & this middleware is used to serve the static files
// STATIC FILES :- static files are the files that does not change when your application is running
//--------------------------------------------------------------------------------
app.use('/static',express.static('public'))


//--------------------------------------------------------------------------------
//(template engine)
// This 2 lines are Compulsory to write while using HBS(Template Engine)
//--------------------------------------------------------------------------------
app.set('view engine' ,'hbs') //this statement tell that we are using hbs (Template Engine)
app.set('views' , 'views')


//--------------------------------------------------------------------------------
// The Partials are used to DNR [Do Not Repeat] 
// Means we dont have to write the code of Navbar in every page 
//-------------------------------------------------------------------------------- 
hbs.registerPartials('views/partials')

//--------------------------------------------------------------------------------
//db connection
//--------------------------------------------------------------------------------
connectToMongo();


//--------------------------------------------------------------------------------
// Listening a Server on a particular PORT
//--------------------------------------------------------------------------------
app.listen(port, ()=>{
    console.log(`Listening to the port : http://localhost:${port}`)
})