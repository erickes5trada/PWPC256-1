// importando el controlador
import homeRouter from './home';
// importando el router del user
import userRouter from './user';

/* GET home page. */
// router.use('/', homeRouter);
// router.use('/user', userRouter);

const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/user', userRouter);
};

export default {
  addRoutes,
};
