# Modules

Every file in node is a module. 
Every vile run by Node has access to a module object. 

A module is just a file containing realted code. 
In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a varaible, function, class or object accessible to other modules. 

- A key aspect of modules: `exports: {}`
> A JS file must "export" the part that it wants to be `require`-able (importable). Files usually export an object (or a function, which in JavaScript is an object anyway). 

The file must be imported/required into the new file. 

- Common convention omits the .js extension, since it is fairly redundant. 
- We also need to export the file as well.
- When we output the value of module in myModule we say that it said exports: {}. 
We can suppose this to mean that by default, node will export an empty object for each file. 


## Exporting Modules:
```js
module.exports = //name of the function
```

## Importing Modules:
```js
const /*name of the function*/ = require('/*filename with or without .js');
```


***

## Summary
- Modules are its way of organizing code into individual files
- Every js file in node is implicitly a module
  - we can `console.log(module)` and see its details
- `module.exports` tells node what to export for a file
  - it defaults to {}
- we can use `require` with relative paths like (`./myModule`)
  - It doesn't need the `.js` extension, as that it is implied. 


# Packages and npm
Another powerful feature of Node.js is its package manager, **npm**. 

## Packages
> self-contained code libraries that we can install and use in our projects.
(short for "packaged library")

> A "library" is a collection of pre-written code. Libraries can be private, but many are packaged up nicely, branded and made publicly available for other developers to use in their own projects. 


Examples: jQuery, Bootstrap are publicly available libraries. 


## Package.json
Virtually all Node.js projects have a file called `package.json, which looks similar to this:
```js
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "Short project summary",
  "main": "index.js",
  "scripts": {
    "myscript": "ENV=development node index.js",
    "test": "echo \"Error: no test specified\" && exit "
  },
  "author": "",
  "license": "MIT",
  "dependencies": {
    "express": "^4.13.4"
  }
}
```
contains basic attributes such as the project's name, description, and author.

## Custom Scripts in `package.json`
The `scripts` portion allows us to run commands using an alias, for instance: 
```terminal
npm run myscript
```
