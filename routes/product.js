const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');


router.get('/:thumbsID', productController.getAllDataPage);



module.exports = router;