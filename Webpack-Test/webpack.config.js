const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebPackPlugin({
        title: 'React Output',
        template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        include: path.resolve(__dirname,'src'),
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env','@babel/preset-react']
            }
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  mode: 'development',
  devServer: {
    contentBase: './index.html',
    port: 3000,
    publicPath: 'http://localhost:3000/dist',
    hotOnly: true
  }
};
