var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Aboutme', (req, res, next) => {
  res.render('Aboutme', {});
});

router.get('/Projects',(req, res, next) => {
  res.render('Projects', {});
});

router.get('/Services',(req, res, next) => {
  res.render('Services', {});
});

router.get('/Contactme',(req, res, next) => {
  res.render('Contactme', {});
});

module.exports = router;
