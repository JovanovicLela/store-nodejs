let express = require('express');
let router = express.Router();
let path=require('path')

router.get('/admin/suppliers/index', (req, res) => {
    res.sendFile(path.join(__dirname,'../') +'/admin/supplier/index.html');
  })

  router.get('/admin/suppliers/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/js/index.js');
  });

router.get('/admin/suppliers/js/create.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/js/create.js');
  });

  router.get('/admin/suppliers/create', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/create.html');
  });

  router.get('/admin/suppliers/view/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/view.html');
  })

  router.get('/admin/supplier/js/view.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/js/view.js');
  })

router.get('/admin/suppliers/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/update.html');
  });

  router.get('/admin/supplier/js/update.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/supplier/js/update.js');
  });

module.exports = router;