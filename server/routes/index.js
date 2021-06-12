import { Router } from 'express';
// importando el router de Home
import home from './home';

const router = new Router();

/* GET home page. */
router.use('/', home);

module.exports = router;
