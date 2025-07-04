// metro.config.js ✅ 适用于 Expo 项目

const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Node.js 模块 polyfill
config.resolver.extraNodeModules = {
  ...require('node-libs-react-native'),
  stream: require.resolve('stream-browserify'),
  crypto: require.resolve('crypto-browserify'),
  zlib: require.resolve('browserify-zlib'),
  util: require.resolve('util/'),
  buffer: require.resolve('buffer/'),
  process: require.resolve('process/browser'),
  assert: require.resolve('assert'),
  os: require.resolve('os-browserify/browser'),
  path: require.resolve('path-browserify'),
};

module.exports = config;