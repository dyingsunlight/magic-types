import * as path from 'path'
import { Configuration } from 'webpack'

const config = [
  {
    entry: './src/index.ts',
    resolve: {
      extensions: ['.js', '.ts'],
    },
    name: 'build',
    mode: 'production',
    devtool: 'source-map',
    output: {
      library: 'MagicTypes',
      libraryTarget: 'umd',
      path: path.join(__dirname, 'dist'),
      filename: 'magic-types.umd.js'
    },
    plugins: [
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile : 'tsconfig.json'
          }
        }
      ]
    }
  }
]

export default config
