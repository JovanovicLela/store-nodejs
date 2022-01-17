let express = require('express');
let router = express.Router();
let path=require('path')

router.get('/admin/users/index', (req, res) => {
    res.sendFile(path.join(__dirname,'../') +'/admin/user/index.html');
  })

  router.get('/admin/users/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/js/index.js');
  });

router.get('/admin/users/js/create.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/js/create.js');
  });

  router.get('/admin/users/create', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/create.html');
  });

  router.get('/admin/users/view/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/view.html');
  })

  router.get('/admin/user/js/view.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/js/view.js');
  })

router.get('/admin/users/update/:id', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/update.html');
  });

  router.get('/admin/user/js/update.js', (req, res) => {
    res.sendFile(path.join(__dirname,'../') + '/admin/user/js/update.js');
  });

module.exports = router;