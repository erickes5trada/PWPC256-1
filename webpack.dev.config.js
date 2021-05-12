const path = require('path');
module.exports ={
  // 0. establecemos el modo del configurador
  mode: 'development',
  // 1. especificamos el archivo de entrada
  entry: './client/index.js',
  // 2. especificamos la salida
  output: {
    // 3. ruta absoluta de salida
    path: path.join(__dirname,'public'),
    // 4. nombre del archivo de salida
    filename: 'js/bundle.js',
    // 5. ruta del path publico para fines del servidor de desarrollo
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    port: 8090,
    host: 'localhost'
  }
}