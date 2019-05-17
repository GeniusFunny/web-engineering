import merge from 'webpack-merge'
import path from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import commonConfig from './webpack.common'

const rootPath = process.cwd()

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(rootPath, 'build'),
    compress: true,
    historyApiFallback: true,
    port: 8080
  },
  mode: "development"
})