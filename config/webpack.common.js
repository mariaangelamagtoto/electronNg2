var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers           = require('./helpers');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

module.exports = {
  entry: {
    'polyfills' : './app/polyfills.ts',
    'vendor'    : './app/vendor.ts',
    'app'       : './app/main.ts'
  },

  resolve: {
    extensions : ['.ts', '.js']
  },
  node: {
    fs: "empty"
  },
  module : {
    rules : [
      {
        test    : /\.ts$/,
        loaders : [
          {
            loader  : 'awesome-typescript-loader',
            options : { configFileName : helpers.root('', 'tsconfig.json')}
          }, 'angular2-template-loader'
        ]
      },
      {
        test : /\.html$/,
        use  : 'html-loader'
      },
      {
        test: /\.less$/,
        exclude: helpers.root('dist', 'app'),
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['to-string-loader', 'css-loader', 'less-loader']})
      },
      {
        test: /\.css$/,
        include: [helpers.root('src')],
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    /*Workaround for angular/angular#11580*/
    new webpack.ContextReplacementPlugin(
      /*The (\\|\/) piece accounts for path separators in *nix and Windows*/
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./app'),
      {}
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
