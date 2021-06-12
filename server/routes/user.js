import { Router } from 'express';
// importando el router de User
import userController from '@server/controllers/userController';

// Creando la instancia del router
const router = new Router();

/* GET users listing. */
router.get('/', userController.index);

export default router;
