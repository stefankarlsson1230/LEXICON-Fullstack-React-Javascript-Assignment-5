"use strict"
const prompt = require('prompt-sync')();

// Assignment 1 - Greeting
function greet(name, message) {
    console.log(`${name}, ${message}`);
}


// Assignment 2 - Calculator
function calculator() {
    
    let num1 = 0;
    let num2 = 0;
    let operator = '';

    do{
        num1 = Number(prompt('Enter first number: ').trim());
    } while(Number.isNaN(num1));
    
    do{
        num2 = Number(prompt('Enter second number: ').trim());
    } while(Number.isNaN(num2));

    do {
        operator = prompt('Operator (+-*/): ').trim();
    } while(operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/');

    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': 
            if(num2 === 0) return undefined;
            else return num1 / num2;
    }
}


// Assignment 3 - Fizz Buzz game:
let number = 0;

do{
    number = Number(prompt('Enter a number: ').trim());
} while(Number.isNaN(number));
number = parseInt(number);

if (number % 3 === 0 && number % 5 === 0) console.log('Fizz Buzz');
else if (number % 3 === 0) console.log('Fizz');
else if (number % 5 === 0) console.log('Buzz');
else console.log(number);



