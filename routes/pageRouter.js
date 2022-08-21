const express = require("express") ;
const {HomepageShow,HomepageShowTwo,ShopageShow,blogpageShow,singleblogpageShow} 
= require("../controllers/pageControllers"); 


const router = express.Router();


router.get(('/', HomepageShow))
router.get('/home', HomepageShowTwo)
router.get('/shop', ShopageShow)
router.get('/blog', blogpageShow)
router.get('/singleblog', singleblogpageShow)


module.exports = router