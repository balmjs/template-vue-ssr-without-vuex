const path = require('path');

// Documentation - https://balm.js.org/docs/config/
// 中文文档 - https://balm.js.org/docs/zh/config/
module.exports = {
  workspace: path.resolve(__dirname, '..'),
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'scss'
  }
  // More Config
};
