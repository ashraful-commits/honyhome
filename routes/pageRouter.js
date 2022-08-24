const express = require('express');
const {
  HomepageShow,
  HomepageShowTwo,
  ShopageShow,
  blogpageShow,
  singleblogpageShow,
  contactpage,
} = require('../controllers/pageControllers');

const router = express.Router();

router.get('/', HomepageShow);
router.get('/home', HomepageShowTwo);
router.get('/shop', ShopageShow);
router.get('/blog', blogpageShow);
router.get('/singleblog', singleblogpageShow);
router.post('/contact', contactpage);

module.exports = router;
