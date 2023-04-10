# Testing

## BDD
Behaviour Driven Development
The topic of BDD covers the entire life cycle of the app development process, from planning the project to writing the code. 

BDD encourages you to specify the behaviour of the app in term of user stories which are broken down into scenarios that can be built and tested. 

We will focus on testing with BDD frameworkds today. 


## BDD Frameworks
When we write tests, we are testing the behaviour of our code. Every tests involves setting up some data, running some code that should do something, and asserting that it does that thing. 

## Setting up
We first need to install a testing framework to start testing our Javascript code. 
We will be using the `mocha` testing frameworka dn teh `chai` assertion library. 

>npm init command is used to create a Node.js project. The npm init command will create a package where the project files will be stored. All the modules you download will be stored in the package. 

- Once you run through the npm init steps above, a package.json file will be generated and placed in the current directory. If you run it in a directory that's not exclusively for yoru project. 



# Chai
- uses common langauge to make the tests eady to understand
- The describe line begins our testing block, and within its callback function, we'll be writing our tests. 
- Test's pattern: (a `keyword`, a `string description`, `callback function`)



### Seeting up the test:
```js
const chai = require('chai');  // import the chai library
const assert = chai.expect;  // establish a variable to be used in our tests
const validator = require('../javascript/groupValidator.js'); // import the file where our function lives
describe("The function groupValidator()", () => {
    // this is where we put our tests.
});
```

### Test:
```js
  it("should return true if there are between 2 and 5 group members", () => {
    assert(validator.isGroupValid(["a", "b", "c"])).to.be.true
  });
```

- the `it` line gives a description of the test, then runs a callback function. The function finds our `validator` file and then runs the `groupValidator` function inside with the parameters we pass it. 
- As for `assert` and `to.be.true`, these logically declare what they're doing. When we run the function isGroupValid() with an input of `["a", "b", "c"]`, we want `chai` to assert that the result that comes back is `true`.

- `npm test` in the terminal will automatically test all the files in the test folder. The green checkmart and the "1 passing` at the bottom tell us that our functio ndid what it was supposed to for this test. 
- If it failed, it shows more texts. 

<br>
<br>
**Modular** means that pieces of code, files, or libraries form building blocks that, when put together make a functioning app/page.

<br>
<br>

Unit testing refers to testing the smallest possible units of a program to ensure that they're doing what they're supposed to do. 
When your design is modular, unit testing helps to keep you sane. Unit tests ensure that each of these smaller pieces can function on its own. 

> keeps projects manageable. 


# Mocha
feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. 
Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. 

# Chai
BDD/TDD assertion library for node and the browser that can be delightfully paired with any javascripting testing framework. 


# --save and --save-dev
Every node project has a file called **package.json** that contains the details about the packages installed in the current project directory and alias for commands to start, build the project. 
Other than that it also contains two json objects: `dependencies` and `dev-dependancies`.

## dependencies
These are packages that are required for the application to work properly. 

## dev-dependencies
Packages that you need while developing th e project but not when deploying the project. These packages are not built when the project is deployed. 
Example: A package for instant-server for qiuck rendering of a web page being developed. 

## Their jobs:
> `--save` saves the name and version of the package beign installed in the dependency object
> `--save-dev` saves the name and version of the package being installed in dev-dependency object. 


## NPM (node project manager)
It is a package manager used by JavaScript runtime environment Node.js. 

It has two very frequently used commands to downloaded different dependencies: 
   npm install --save [pacakage-name]
   npm install --save-dev [package-name]. 
Both commands will lead to download and installation of packages from NPM server but they have a bit different ways. 

## npm install [package-name] --save
It signifies that the package is core dependency. 
Core dependency is any package without which the application cannot perform its intended work. 
In package.json file under the dependencies section contains the list of core dependencies. The npm install will also lead to a similar result. 

## npm install [package-name] --save-dev
It signifies that the package is a development dependency. A development dependency is any package that absence will not affect the work of the application. In package.json file under the devDependencies section contains the list of all development dependencies. When someone installs your package, they will not install any development dependcies but if they clone the repository, then they will install all the development dependcies too. 


<br>
<br>

## Table:
| -save | -save-dev  |
|---|---|
|  The package installed is core dependency. | The package installed is not a core rather development dependency.  |
|  All core dependency is listed under dependencies in package.json. |  All development dependency is listed under devDependencies in package.json. |
| It will be installed if a third person tries to install or clone your package.  |  It will be installed if a third person tries to clone your package. |
| Example: express, body-parser etc.  | Example: nodemon  |