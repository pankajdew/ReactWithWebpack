const path = require("path");
const webpack = require("webpack");
const bundlePath = path.resolve(__dirname, "dist/");

module.exports = function (env) {
  return {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['env'] }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name(file) {                 
                  if (env.NODE_ENV === 'development') {
                    console.log('Building react app for Development...')
                    return '[path][name].[ext]'
                  }
                  console.log('Building react app for Production...')
                  return '[hash].[ext]'
                },
                context: ''
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      publicPath: bundlePath,
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
      publicPath: "http://localhost:3000/dist"
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  }
}