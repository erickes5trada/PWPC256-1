import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import indexRouter from '@s-routes/index';
import usersRouter from '@s-routes/users';

// webpack modules
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config';
import webpackDevConfig from '../webpack.dev.config';

// Consultamos el modo en el que se esta ejecutando el programa
const env = process.env.NODE_ENV || 'development';

// Se crea la aplicación de express
var app = express();

// verificando el modo de ejecución de la aplicación
if(env === 'development'){
  console.log('executing in development mode: Webpack hot reloading');
  // Paso 1: agregando la ruta del hot module reloading
  // reload=true: habilita la recarga del frontend cuando hay cambios en el código
  // timeout: tiempo de recarga y espera  
  webpackConfig.entry = ['wbepack-hot-middleware/client?reload=true&timeout=1000',
  webpackConfig.entry];

  // Paso 2: agregando el plugin
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin);

  // Paso 3: creando compilador de webpack
  const compiler = webpack(webpackConfig);

  // Paso 4: Agregando el middleware a la cadena de middlewares de la aplicación
  app.use(webpackDevMiddleware(compiler,
    {
      publicPath: webpackDevConfig.output.publicPath
    }));

  // Paso 5: agregando webpack hot middleware
  app.use(webpackHotMiddleware(compiler));
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
