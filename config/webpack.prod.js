import merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import commonConfig from './webpack.common'
import UglifyjsWebpackPlugin from 'uglifyjs-webpack-plugin'

module.exports = merge(commonConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin(),
    new UglifyjsWebpackPlugin()
  ]
})