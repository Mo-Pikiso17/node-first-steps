"use strict";

const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');
const figlet = require('figlet');


//green background and text in black.
const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage) // Print out using chalk modules.

 
figlet('Hello, Xola', function(err, greeting) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(greeting) // Print out the figlet module using ASCII art
});

figlet(greet('Xola'), function (err, data) {
    if (err) {
      console.log('Something went wrong...')
      console.dir(err)
      return
    }
    console.log(chalk.bgGreen.black(data)) // Print out the combination of chalk and figlet modules
})

//To display use node greet_xola.js in the terminal the outcome will be Hello, Xola.