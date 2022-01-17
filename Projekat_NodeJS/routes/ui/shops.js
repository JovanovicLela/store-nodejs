let express = require('express');
let router = express.Router();
let path=require('path')

router.get('/admin/shops/index', (req, res) => {
    res.sendFile(path.join(__dirname,'../') +'/admin/shop/index.html');
  })

  router.get('/admin/shops/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/js/index.js');
  });

router.get('/admin/shops/js/create.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/js/create.js');
  });

  router.get('/admin/shops/create', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/create.html');
  });

  router.get('/admin/shops/view/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/view.html');
  })

  router.get('/admin/shop/js/view.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/js/view.js');
  })

router.get('/admin/shops/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/update.html');
  });

  router.get('/admin/shop/js/update.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/shop/js/update.js');
  });

module.exports = router;