import { Router } from 'express';
// importando el router de Home
import home from './home';

const router = new Router();

/* GET home page. */
router.get('/', home);

/* Agregando nueva ruta */
router.get('/greeting', (req, res) => {
  res.status(200).json({ message: 'Mensaje JSON para la ruta /greeting' });
});

module.exports = router;
