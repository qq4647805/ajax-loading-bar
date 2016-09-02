var path = require('path');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
var webpack=require('webpack');
module.exports = {
  entry: {
    app:APP_PATH+'/main.js',
  },
  output: {
    path: BUILD_PATH,
    filename: 'ajax-loading-bar.min.js',
  },
  module:{
    loaders:[
      {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    colors: true,
    host:'0.0.0.0',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
	],
  stats: { colors: true },
};
