
const url =require("url")
const path  = require("path") ;



const HomepageShow =(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../public/index.html"))
}
const HomepageShowTwo =(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../public/index-2.html"))
}
const ShopageShow =(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../public/shop.html"))
}
const blogpageShow =(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../public/blog.html"))
}
const singleblogpageShow =(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"../public/singleblog.html"))
}
const contactpage =(req,res)=>{
    res.status(200).json(req.body)
}








module.exports ={
    HomepageShow,HomepageShowTwo,ShopageShow,blogpageShow,singleblogpageShow,contactpage
}