const {
  resolve
} = require('path')

module.exports = function (context, options) {
  return {
    name: 'custom-webpack-alias',
    configureWebpack(config, isServer, utils) {
      console.log(resolve(__dirname, '../package/index.ts'), 'dsadsa')
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