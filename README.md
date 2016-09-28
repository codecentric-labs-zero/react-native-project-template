# react-native-project-template
A project template for kickstarting codecentric labs mobile app assignments.

## Usage
This is a very rough first version of a Yeoman generator for bootstrapping new react-native applications. 
It will use react-native to generate the boilerplate, then add test setup and a few example components.

As we haven't published the generator yet, you'll need to install it locally first:

```
$ cd generator-cclz-react-native && npm link
```

After that (assuming you have installed [Yeoman](http://yeoman.io/)), you can create a new project by followin these steps:

1. Run `yo cclz-react-native` from the parent directory of your future project directory.
2. Provide a project name (use only letters or react-native will complain)
3. Always choose overwrite when prompted so by Yeoman
4. Change into the project directory an run `npm install`
5. You should now be able to use `react-native run-ios` and `react-native run-android` to run the example app
6. `npm test` will execute the example tests.
