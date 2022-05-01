const path=require("path");
module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer:{
  	static:path.resolve(__dirname),
  	historyApiFallback: true
  },
module: {
  rules: [
    {
      test: /\.js$|jsx/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" },'@babel/preset-react']
          ]
        }
      }
    }
  ]
}
}