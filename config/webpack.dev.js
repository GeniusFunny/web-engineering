import merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import commonConfig from './webpack.common'

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  mode: "development"
})