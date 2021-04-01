var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    author: 'Erick Estrada',
    appName: 'WebApp',
    lista: ['Facebook','Twitter','Instagram']
   });
});

/*Agregando nueva ruta*/
router.get('/greeting',(req,res,next) => {
  res.status(200).json({message:'Holuuu'});
});

module.exports = router;
