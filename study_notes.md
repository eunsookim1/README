# Study Notes

## Command Line Args

>  Command line arguments are a common way of getting user input in a program. 

Reference: [Command Line Arguments in Node.js](https://stackabuse.com/command-line-arguments-in-node-js/)


>### Advantages: 
* You can pass information to an application before it starts. Useful when dealing with large number of configuration settings. 
* They are passed as strings to your program. String data types can easily be converted to other data types within an application, making the arguments very flexible. 
* You can pass unlimited number of arguments via the command line.
* Command line arguments are used in conjuction with scripts and batch files, which is useful for automated testing. 

>### Disadvantages:
* It has a steep learning curve
* Only used through laptop or desktop. 

## Passing Command Line Arguments in Node.js
> ### Using process.argv
How to use arguments via the built-in way(process.argv):

