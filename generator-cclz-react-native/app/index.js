'use strict';

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },

    prompting: function () {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the project name',
            default: this.appname
        }]).then(function (answers) {
            this.name = answers.name;
        }.bind(this));
    },

    install: function () {
        this.npmInstall(
            [
                'react@15.2.1',
                'react-dom@15.2.1',
                'react-native@0.31.1',
                'react-native-platform-stylesheet',
                'react-redux',
                'redux',
                'redux-async-initial-state',
                'redux-thunx',
                'axios'
            ], {'save' : true});
        this.npmInstall(
            [
                'jsdom',
                'axios-mock-adapter',
                'babel-core',
                'babel-preset-react-native',
                'chai',
                'chai-as-promised',
                'chai-enzyme',
                'enzyme',
                'istanbul',
                'jsdom-global',
                'mocha',
                'proxyquire',
                'react-native-mock',
                'redux-mock-store',
                'sinon',
                'sinon-chai'
            ], {'saveDev' : true});
    }

});
