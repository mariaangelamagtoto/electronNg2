var webpack           = require('webpack');
var webpackMerge      = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let commonConfig      = require('./webpack.common.js');
let OpenBrowserPlugin = require('./open-browser-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool : 'source-map',

  output  : {
    path          : helpers.root('dist'),
    publicPath    : '/',
    filename      : '[name].[hash].js',
    chunkFilename : '[id].[hash].chunk.js'
  },

  plugins : [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env' : {
        'ENV'                             : JSON.stringify(ENV),
        'LIVEDEALERFRONTHOSTNAME'         : JSON.stringify(env.LIVEDEALERFRONTHOSTNAME),
        'LIVEDEALERFRONTHOSTNAMEPORT'     : JSON.stringify(env.LIVEDEALERFRONTHOSTNAMEPORT),
        'LIVEDEALERFRONTHOSTNAMEVERSION'  : JSON.stringify(env.LIVEDEALERFRONTHOSTNAMEVERSION),
        'LIVEDEALERSOCKETIP'              : JSON.stringify(env.LIVEDEALERSOCKETIP),
        'LIVEDEALERSOCKETIPPORT'          : JSON.stringify(env.LIVEDEALERSOCKETIPPORT),
        'LIVEDEALERSOCKETCHATIP'          : JSON.stringify(env.LIVEDEALERSOCKETCHATIP),
        'LIVEDEALERSOCKETCHATIPPORT'      : JSON.stringify(env.LIVEDEALERSOCKETCHATIPPORT),
        'LIVEDEALERSOCKETHOSTNAME'        : JSON.stringify(env.LIVEDEALERSOCKETHOSTNAME),
        'LIVEDEALDERSOCKETHOSTNAMEPORT'   : JSON.stringify(env.LIVEDEALDERSOCKETHOSTNAMEPORT)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle : {
        keep_fnames : true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader   : {
        minimize   : false
      }
    }),
    /*Opens default browser*/
    new OpenBrowserPlugin()
  ]
});
