const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  defaultLoaders: {
    css: false
  },
  loaders: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    {
      test: /\.less$/,
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false
          }
        },
        'less-loader'
      ]
    }
  ],
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    '@': path.resolve(__dirname, '..', 'app', 'scripts')
  },
  plugins: [new VueLoaderPlugin()],
  options: {
    compress: {
      drop_console: false
    }
  }
};
