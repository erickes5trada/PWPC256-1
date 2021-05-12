var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express', 
    author: 'Erick Estrada Senado',
    appName: 'WebApp',
    lista: ['Facebook','Twitter','Instagram'],
    company: 'Awesome software'
   });
});

/*Agregando nueva ruta*/
router.get('/greeting',(req,res,next) => {
  res.status(200).json({message:'Mensaje JSON para la ruta /greeting'});
});

module.exports = router;
