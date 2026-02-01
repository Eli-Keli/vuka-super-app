import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import * as Repack from '@callstack/repack';

export default (env) => {
  const {
    mode = 'development',
    context = '.',
    entry = './index.js',
    platform = process.env.PLATFORM,
    minimize = mode === 'production',
    devServer = undefined,
    bundleFilename = undefined,
    sourceMapFilename = undefined,
    assetsPath = undefined,
    reactNativePath = undefined,
  } = env;

  const dirname = process.cwd();

  if (!platform) {
    throw new Error('Missing platform');
  }

  return {
    mode,
    devtool: false,
    context,
    entry,
    resolve: {
      ...Repack.getResolveOptions(platform),
    },
    output: {
      clean: true,
      path: path.join(dirname, 'build/generated', platform),
      filename: 'index.bundle',
      chunkFilename: '[name].chunk.bundle',
      publicPath: Repack.getPublicPath({ platform, devServer }),
      uniqueName: 'mini-app',
    },
    optimization: {
      minimize,
      minimizer: [
        new TerserPlugin({
          test: /\.(js|jsx|ts|tsx)$/,
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
      chunkIds: 'named',
      splitChunks: {
        default: false,
        vendors: false,
        interop: false,
        namedChunks: true,
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          include: [
            /node_modules(.*[\\/\\/])+react/,
            /node_modules(.*[\\/\\/])@react-native/,
            /node_modules(.*[\\/\\/])@react-navigation/,
            /node_modules(.*[\\/\\/])@expo/,
            /node_modules(.*[\\/\\/])expo/,
            /node_modules(.*[\\/\\/])@callstack\/repack/,
            path.resolve(dirname, 'src'),
            path.resolve(dirname, '.'),
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-expo'],
            },
          },
        },
        {
          test: Repack.getAssetExtensionsRegExp(Repack.ASSET_EXTENSIONS),
          use: {
            loader: '@callstack/repack/assets-loader',
            options: {
              platform,
              devServerEnabled: Boolean(devServer),
            },
          },
        },
      ],
    },
    plugins: [
      new Repack.RepackPlugin({
        context,
        mode,
        platform,
        devServer,
        output: {
          bundleFilename,
          sourceMapFilename,
          assetsPath,
        },
      }),
      new Repack.plugins.ModuleFederationPlugin({
        name: 'mini-app',
        exposes: {
          './App': './src/App.tsx',
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: '19.1.0',
          },
          'react-native': {
            singleton: true,
            eager: true,
            requiredVersion: '0.81.5',
          },
        },
      }),
    ],
  };
};
