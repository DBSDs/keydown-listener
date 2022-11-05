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
            'package': resolve(__dirname, '../package/index.ts'),
          },
        },
      };
    },
  };
};