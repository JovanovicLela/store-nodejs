let express = require('express');
let router = express.Router();
let path=require('path')

router.get('/admin/products/index', (req, res) => {
    res.sendFile(path.join(__dirname,'../') +'/admin/product/index.html');
  })

  router.get('/admin/products/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/js/index.js');
  });

router.get('/admin/products/js/create.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/js/create.js');
  });

  router.get('/admin/products/create', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/create.html');
  });

  router.get('/admin/products/view/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/view.html');
  })

  router.get('/admin/product/js/view.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/js/view.js');
  })

router.get('/admin/products/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/update.html');
  });

  router.get('/admin/product/js/update.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/product/js/update.js');
  });

module.exports = router;