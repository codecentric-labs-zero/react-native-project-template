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
            message: 'What is the scene name (First letter should be uppercase)'
        }]).then(function (answers) {
            this.name = answers.name;
            this.log(this.name)
        }.bind(this));
    },

    writing: function() {
        this.template(
            this.templatePath('NewScene/index.js'),
            this.name + '/index.js',
            {projectName: this.name}
        );
        this.template(
            this.templatePath('NewScene/NewActions.js'),
            this.name + '/'+this.name+'Actions.js',
            {projectName: this.name}
        );
        this.template(
            this.templatePath('NewScene/NewActionTypes.js'),
            this.name + '/'+this.name+'ActionTypes.js'
        );
        this.template(
            this.templatePath('NewScene/NewReducer.js'),
            this.name + '/'+this.name+'Reducer.js',
            {projectName: this.name}
        );
        this.template(
            this.templatePath('NewScene/NewSceneContainer.js'),
            this.name + '/'+this.name+'SceneContainer.js',
            {projectName: this.name}
        );
        this.template(
            this.templatePath('NewScene/NewSceneComponent.js'),
            this.name + '/'+this.name+'SceneComponent.js',
            {projectName: this.name}
        );
        this.template(
            this.templatePath('NewScene/NewSceneStyles.js'),
            this.name + '/'+this.name+'SceneStyles.js',
            {projectName: this.name}
        );

    }

});
