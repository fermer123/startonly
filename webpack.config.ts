import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

const devServer: DevServerConfiguration = {};
const config: Configuration = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.json'),
      }),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
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
export default config;
