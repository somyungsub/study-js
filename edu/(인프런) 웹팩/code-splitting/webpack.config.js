var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production(배포시 필수), development, none
  entry: './index.js',
  output: {
    filename: 'bundle.js',// [chunkhash].js ,[id] 등 사용 가능
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // 각 규칙을 객체 배열로 표현 가능
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'] //  순서도 영향을 받으므로..  오른쪽에서 왼쪽 순으로 적용 됨
      // },
      // {
      //   test: /\.sass$/,
      //   use: ['style-loader', 'css-loader', 'sass-loader'] //  순서도 영향을 받으므로..  오른쪽에서 왼쪽 순으로 적용 됨
      // },
      // {
      //   test: /\.js$/,
      //   use: ['babel-loadaer']
      // }
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}
