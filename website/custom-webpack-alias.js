const {
  resolve
} = require('path')

module.exports = function (context, options) {
  return {
    name: 'custom-webpack-alias',
    configureWebpack(config, isServer, utils) {
      return {
        resolve: {
          alias: {
            'dist': resolve(__dirname, '../dist/index.js'),
          },
        },
      };
    },
  };
};