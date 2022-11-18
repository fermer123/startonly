const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'build.js',
  },
  resolve: {
    alias: {
      swiper: path.resolve(__dirname, './node_modules/swiper/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[local]' },
            },
            // options: {
            //   modules: true,
            // },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
