const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = () => ({
  entry: {
    bundle: ['./src/index.jsx'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|dist)/,
      loaders: ['babel-loader'],
    }],
  },

  plugins: [
    new CopyWebpackPlugin([{
      from: 'src/index.html',
    }]),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ],
});