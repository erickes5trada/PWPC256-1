import { Router } from 'express';

const router = new Router();

/* GET home page. */
router.get('/', );

/*Agregando nueva ruta*/
router.get('/greeting',(req,res,next) => {
  res.status(200).json({message:'Mensaje JSON para la ruta /greeting'});
});

module.exports = router;
