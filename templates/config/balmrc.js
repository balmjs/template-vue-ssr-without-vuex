const path = require('path');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
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
