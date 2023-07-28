const mongoose = require('mongoose')
const Detail = require('./models/Detail')
const Slider = require('./models/slider')
const Service = require('./models/service')
const Banner2 = require('./models/banner2')

const connectToMongo = () => {
    mongoose.connect("mongodb://0.0.0.0:27017/mern_project") // This function is used to connect to the Database
        .then(() => { // If the MongoDB is connected then this will executed
            console.log("Mongo Db Connected")
            
            //  --------------------------------------------------------------------------------------------

            // Banner2.create({
            //     title : "We work for people , Not for money",
            //     text : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ut voluptatum similique dolore assumenda facilis quae placeat at! Error ipsum quas nisi illum natus alias, adipisci dolores dolorem iusto laudantium in. Excepturi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores provident consectetur minima nemo soluta est aliquam commodi dicta numquam modi!",
            //     imgUrl: "/static/images/graphic2"
            // })

            //  --------------------------------------------------------------------------------------------

            // Service.create([
            //     {
            //         icon:'fa-brands fa-artstation',
            //         title : 'Provide Best Courses',
            //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati assumenda non impedit architecto inventore maxime!',
            //         linkText:'https://www.google.com',
            //         link:'Check'
            //     },
            //     {
            //         icon:'fa-brands fa-accusoft',
            //         title : 'Provide Best Courses',
            //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati assumenda non impedit architecto inventore maxime!',
            //         linkText:'https://www.google.com',
            //         link:'Check'
            //     },
            //     {
            //         icon:'fa-brands fa-center-code',
            //         title : 'Provide Best Courses',
            //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati assumenda non impedit architecto inventore maxime!',
            //         linkText:'https://www.google.com',
            //         link:'Check'
            //     },
            //     {
            //         icon:'fa-brands fa-bitbucket',
            //         title : 'Provide Best Courses',
            //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum obcaecati assumenda non impedit architecto inventore maxime!',
            //         linkText:'https://www.google.com',
            //         link:'Check'
            //     }
            // ])


            // Slider.create([
            //     {
            //         title : "Learn java",
            //         subTitle : "Java is platform independent language",
            //         imageUrl : "/static/images/slider1.jpg"
            //     },
            //     {
            //         title : "Learn Python",
            //         subTitle : "Python is easy to learn",
            //         imageUrl : "/static/images/slider2.jpg"
            //     },
            //     {
            //         title : "Learn React",
            //         subTitle : "React is basically a framework",
            //         imageUrl : "/static/images/slider3.jpg"
            //     },
            // ])
            

            // Detail.create({
            //     brandName: "Info Technical Solutions",
            //     brandIconUrl: "https://cdn.pixabay.com/photo/2015/05/22/19/01/business-779542_1280.jpg",
            //     links: [
            //         {
            //             label: "Home",
            //             url: "/"
            //         },
            //         {
            //             label: "Services",
            //             url: "/services"
            //         },
            //         {
            //             label: "Gallery",
            //             url: "/gallery"
            //         },
            //         {
            //             label: "About",
            //             url: "/about"
            //         },
            //         {
            //             label: "Contact Us",
            //             url: "/contact-us" 
            //         },
            //     ]
            // })
        })
        .catch(() => { // If the MongoDB is not connected then this will executed
            console.log("error")
        })
}
module.exports = connectToMongo