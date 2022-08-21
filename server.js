const express = require("express") ;
const dotenv = require("dotenv") ;
const url =require("url")
// const path = require("path")
const colors = require("colors") ;

const routerPage = require("./routes/pageRouter") 


// dotenv config

dotenv.config();


// environment const 
const port = process.env.PORT || 600;



// express init 

const app = express();


// use express 
app.use('/public',express.static('public'))

// json and form data
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(routerPage)


// create server 
app.listen(port, () => {
    console.log(`server is running port ${port}`.bgMagenta);
})