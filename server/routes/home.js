// importando Router
import { Router } from 'express';

// importando al controlador homeController
import homeController from '@server/controllers/homeControllers';

// creando la instancia del router
const router = new Router();

// GET '/'
router.get(['/', '/index'], homeController.index);

// GET '/greeting'
router.get('/greeting', homeController.greeting);

// GET '/about'
router.get('/about', homeController.about);

// exportando el router que maneja las subrutas
// para el controlador home
export default router;
