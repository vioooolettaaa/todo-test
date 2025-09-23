const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src/app', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@store': path.resolve(__dirname, 'src/store'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.module\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@use "@shared/styles/variables" as *;\n',
            },
          },
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@use "@shared/styles/variables" as *;\n',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
    port: 5173,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
