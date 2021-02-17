const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',

  output: {
    assetModuleFilename: 'images/[hash][ext][query]'
  },

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" }
          }, 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(ts||tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      },
      {
        test: /\.(js||jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  plugins: [
    new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin(
      { template: './public/index.html' }
    )
  ],

  devtool: 'inline-source-map',

  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },

  devServer: {
    contentBase: './dist',
  }
}
