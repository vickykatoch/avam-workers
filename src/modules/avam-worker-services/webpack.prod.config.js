const {
  resolve
} = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const tsImportPluginFactory = require('ts-import-plugin')
const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;

const importPlugin = tsImportPluginFactory({
  libraryName: 'rxjs/operators',
  style: false,
  libraryDirectory: '',
  camel2DashComponentName: false,
  transformToDefaultImport: false
})

module.exports = {
  entry: {
    'd-worker' : './src/modules/avam-worker-services/dedicated-worker.ts',
    's-worker' : './src/modules/avam-worker-services/shared-worker.ts'
  },
  output: {
    filename: '[name].js',
    path: resolve(process.cwd(), 'src/assets/workers')
  },
  resolve: {
    extensions: [ '.ts', '.js'],
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'development'
      }),
      new TsConfigPathsPlugin(),
      new webpack.HashedModuleIdsPlugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //   mangle: {
      //     screw_ie8: true
      //   },
      //   compress: {
      //     screw_ie8: true,
      //     dead_code: true,
      //     warnings: false
      //   },
      //   beautify: false,
      //   sourceMap: false,
      //   comments: false
      // })
    ]
  },
  module: {
    rules: [{
      test: /\.(js|ts)$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [importPlugin]
        })
      },
      exclude: /node_modules/
    }]
  }


}
