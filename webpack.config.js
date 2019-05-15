// const path = require('path')

// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: './src/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })

const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: {loader: 'style-loader'}
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[name]_[local]_[hash:base64:5]'
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /src/,
        use: {loader: 'css-loader'}
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve('dist'),
//     filename: 'index_bundle.js'
//   },
//   module: {
//     rules: [
//       { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
//       { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
//       {
//         test: /\.css$/,
//         use: {loader: 'style-loader'}
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'css-loader',
//           options: {
//             modules: true,
//             localIdentName: '[name]_[local]_[hash:base64:5]'
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         exclude: /src/,
//         use: {loader: 'css-loader'}
//       },
//       {
//         test: /\.svg$/,
//         use: [
//          { loader: 'babel-loader' },
//           {
//             loader: 'react-svg-loader',
//             query: {
//               svgo: {
//                 plugins: [{removeTitle: false}],
//                 floatPrecision: 2
//               }
//             }
//           }
//         ]
//       }
//     ]
//   }
//   // plugins: [HtmlWebpackPluginConfig]
// }
