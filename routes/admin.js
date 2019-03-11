const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/add-product => POST
 router.post('/add-product', adminController.getAddProduct);
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

exports.routes = router;
exports.products = products;