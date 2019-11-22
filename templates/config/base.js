const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  cssLoader: false,
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.less$/,
      loader: ['vue-style-loader', 'css-loader', 'less-loader']
    }
  ],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '..', 'app', 'scripts')
  },
  plugins: [new VueLoaderPlugin()],
  lint: false,
  options: {
    compress: {
      drop_console: false
    }
  }
};
