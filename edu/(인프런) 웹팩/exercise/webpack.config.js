var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js', // 웹팩 변환 대상 파일
  output: {               // 결과 파일 정보
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/', // CDN 배포시
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', // es6 -> 여러브라우저가 호환되도록 해줌
        exclude: /node_modules/ // 제외. 라이브러리 대상들 등
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',  // 이미지 인식할수 있게
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {  // ? -> 웹팩으로 파일 해석할 때 방식을 지정
    alias: {  // 별칭 길어서... 짧게
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json'] // 확장자 생략해도 됨!. 확장자 붙이지 않아도 됨!
  },
  devServer: {
    historyApiFallback: true, // 속성들 확인
    noInfo: true,
    overlay: true
  },
  performance: {  // 중요하지는 않음, 결과물의 파일 사이즈가 초과가 되면.. 경고를 주게됨
    hints: false
  },
  devtool: '#eval-source-map' // 소스맵 여러개중에 하나. 확인 필요
}

/*
  npm run build
  - 배포시 아래 를 추가적으로 넣겠다고... 정의한것
  - 아래는 웹팩 버전 3.x까지의 포맷, 위는 4부터
  - parcel
 */

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
