var webpack = require("webpack");

module.exports = {  
  entry: {
      bundle: "./typescript/main.tsx"
  },
  output: {
        path: "../src/main/resources/static/js",
        filename: "[name].js"
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"]
  },
  module: {
    loaders: [
      { 
        test: /\.(tsx|ts)$/, 
        loader: 'ts-loader',
        exclude: /node_modules/ 
      }
    ],
    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "redux": "Redux",
        "react-redux": "ReactRedux",
        "redux-thunk":"ReduxThunk"
    },
  },
  plugins:[
      new webpack.DefinePlugin({
        "process.env": { 
           NODE_ENV: JSON.stringify("production") 
           // NODE_ENV: JSON.stringify("development") 
         }
      }),
      // new webpack.optimize.UglifyJsPlugin()
      
      new webpack.ProvidePlugin({
          'Promise': 'es6-promise',
          // 'fetch': 'exports?self.fetch!isomorphic-fetch'
      }),
        
    ],
}