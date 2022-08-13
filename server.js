import express from "express";
import dotenv from "dotenv";
import path, { dirname } from "path";
import url, { fileURLToPath } from "url";
import colors from "colors";
import exp from "constants";


// dotenv config

dotenv.config();

const __dirname =dirname(fileURLToPath(import.meta.url))
// environment const 
const port = process.env.PORT;



// express init 

const app = express();


// use express 
app.use('/public',express.static('public'))

// json and form data
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// routing

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'))
})
app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index-2.html'))
})
app.get('/shop', (req,res) => {
    res.sendFile(path.join(__dirname,'public/shop.html'))
})
app.get('/blog', (req,res) => {
    res.sendFile(path.join(__dirname,'public/blog.html'))
})
app.get('/singleblog', (req,res) => {
    res.sendFile(path.join(__dirname,'public/singleblog.html'))
})
app.post('/contact', (req,res) => {
    res.status(200).json(req.body)
})




// create server 
app.listen(port, () => {
    console.log(`server is running port ${port}`.bgMagenta);
})