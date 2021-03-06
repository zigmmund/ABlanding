module.exports = {
  entry: {
    App: "./app/assets/scripts/app.js",
    Vendor: "./app/assets/scripts/vendor.js"
  },
  output: {
    path: "/Users/zigmmund/Desktop/sites/ABLanding/app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
