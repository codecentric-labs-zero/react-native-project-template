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
            message: 'What is the project name (only use lowercase letters)'
        }]).then(function (answers) {
            this.name = answers.name;
        }.bind(this));
    },

    configuring: function () {
        this.spawnCommandSync('react-native', ['init', this.name]);
    },

    writing: function () {
        this.template(
            'package.json',
            this.name + '/package.json',
            { projectName: this.name }
        );
        this.template(
            'index.android.js',
            this.name + '/index.android.js',
            { projectName: this.name }
        );
        this.template(
            'index.ios.js',
            this.name + '/index.ios.js',
            { projectName: this.name }
        );
        this.copy(
            '.babelrc',
            this.name + '/.babelrc'
        );
        this.copy(
            '.editorconfig',
            this.name + '/.editorconfig'
        );
        this.copy(
            'gitignore',
            this.name + '/.gitignore'
        );
        this.copy(
            'circle.yml',
            this.name + '/circle.yml'
        );
        this.copy(
            'merge-base-ff.sh',
            this.name + '/merge-base-ff.sh'
        );
        this.copy(
            'README.md',
            this.name + '/README.md'
        );
        this.directory('src', this.name + '/src');
        this.directory('test', this.name + '/test');
        this.directory('android', this.name + '/android');
        this.directory('Images.xcassets', this.name + '/ios/' + this.name + '/Images.xcassets');
        this.directory('default-assets', this.name + '/default-assets');
    }

});
