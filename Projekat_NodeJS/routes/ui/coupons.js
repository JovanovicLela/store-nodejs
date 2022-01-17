let express = require('express');
let router = express.Router();
let path=require('path')

router.get('/admin/coupons/index', (req, res) => {
    res.sendFile(path.join(__dirname,'../') +'/admin/coupon/index.html');
  })

  router.get('/admin/coupons/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/js/index.js');
  });

router.get('/admin/coupons/js/create.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/js/create.js');
  });

  router.get('/admin/coupons/create', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/create.html');
  });

  router.get('/admin/coupons/view/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/view.html');
  })

  router.get('/admin/coupon/js/view.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/js/view.js');
  })

router.get('/admin/coupons/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/update.html');
  });

  router.get('/admin/coupon/js/update.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/coupon/js/update.js');
  });

module.exports = router;