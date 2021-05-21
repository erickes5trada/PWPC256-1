const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Importando EsLint
const EslintWebpackPlugin = require('eslint-webpack-plugin');

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
    port: process.env.PORT || '3000',
    host: 'localhost'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    'modules': false,
                    'useBuiltIns': 'usage',
                    'targets': {"chrome":"80"},
                    'corejs': 3
                  }
                ]
              ],
              "plugins": [
                [
                  "module-resolver", 
                  {
                    "root" : ["./"],
                    "alias": {
                      "@client" : "./client"
                    }
                  } 
                ]
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/app.css'
    }),
    new EslintWebpackPlugin()
  ]
}