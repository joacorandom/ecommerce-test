const router = require('express').Router();

const productController = require('../controllers/product-controller');

router.get('/product', productController.search);

module.exports = router;
