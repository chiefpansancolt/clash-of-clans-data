// source: https://jestjs.io/docs/code-transformation#examples
/* eslint-disable */
const path = require('path')

module.exports = {
  process(src, filename, config, options) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
  },
}
