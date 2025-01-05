const express = require('express');
const router = express.Router();


const productController = require('../controllers/product.js');

router.get('/contact',productController.getContact)
router.post('/success',productController.postContact)

module.exports = router