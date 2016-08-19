import fs from 'fs'
import path from 'path'
import register from 'babel-core/register'
import babelPolyfill from 'babel-polyfill'
import sinon from 'sinon'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'

const modulesToCompile = [
  'react-native',
  'react-native-button',
  'react-native-router-flux',
  'tcomb-form-native',
  'react-native-i18n'
].map((moduleName) => new RegExp(`/node_modules/${moduleName}`));

const rcPath = path.join(__dirname, '..', '.babelrc');
const source = fs.readFileSync(rcPath).toString();
const config = JSON.parse(source);
config.ignore = function(filename) {
  if (!(/\/node_modules\//).test(filename)) {
    return false;
  } else {
    const matches = modulesToCompile.filter((regex) => regex.test(filename));
    const shouldIgnore = matches.length === 0;
    return shouldIgnore;
  }
}

register(config);

global.__DEV__ = true;
global.expect = chai.expect;
chai.use(chaiEnzyme());
chai.use(sinonChai);
chai.use(chaiAsPromised);

require('react-native-mock/mock');
require('jsdom-global/register');
const React = require('react-native');
React.NativeModules.RNI18n = {
  locale: 'en_EN'
}
