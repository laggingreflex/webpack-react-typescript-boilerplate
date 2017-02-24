let path = require('path');
let { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot-loader', 'awesome-typescript-loader'],
        include: [path.resolve(__dirname, 'app')]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    modules: ['app', 'node_modules', 'webpack', 'browser', 'web', 'browserify', 'main'],
  },

  plugins: [
    new CheckerPlugin()
  ],

  externals: [
  ]
};