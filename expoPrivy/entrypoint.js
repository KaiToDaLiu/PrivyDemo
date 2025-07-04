// entrypoint.js
import { Buffer } from 'buffer';
global.Buffer = Buffer;
import 'fast-text-encoding';             // TextEncoder/TextDecoder polyfill
import 'react-native-get-random-values';
import '@ethersproject/shims';           // ethers.js  polyfills

import { TextEncoder, TextDecoder } from 'fast-text-encoding';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// ✅ 设置 global.crypto.getRandomValues
if (typeof global.crypto !== 'object') {
  global.crypto = {};
}
if (typeof global.crypto.getRandomValues !== 'function') {
  const { getRandomValues } = require('react-native-get-random-values');
  global.crypto.getRandomValues = getRandomValues;
}

//  process.en
import process from 'process/browser';
global.process = process;
const _atob = atob;
atob = (str) => {
  try {
    return _atob(str);
  } catch (e) {
    console.warn(e, 'retrying with padding');
    return _atob(str + '=');
  }
};

import { registerRootComponent } from 'expo';
import App from './App';
registerRootComponent(App);