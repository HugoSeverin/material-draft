var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var packagejson = require('../package.json');

module.exports = {

  //  Defines the entrypoint of our application.
  entry: [
    'babel-polyfill',
    // path.resolve(__dirname, '../src/index.js')
    path.resolve(__dirname, '../src/examples/basic.js')
  ],

  //  Bundle to a ./build/public/bundle.js file.
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'material-draft.js'
  },

  //  Use babel for anything that is *.js or *.jsx.
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: path.resolve(__dirname, '../src')
      }, {
        test: /\.css$/, // Only .css files
        loader: 'style!css' // Run both loaders
      }
    ]
  },

  //  Configure the plugins. We copy the index.html
  //  file to the build folder.
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../examples/basic.html'),
      inject: 'body', // Inject webpack scripts into the body.
      hash: true
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(packagejson.version)
    })
  ],

  resolve: {
    root: path.resolve(__dirname, '../src')
  }
};