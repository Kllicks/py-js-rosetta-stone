// Yep. It's JavaScript

// hello.py
//console.log("hello javascript what is up")

//its lame.

// //using var -> variable must be declared
// //and camelCase not snake-case
// var promptText = 'What is your name';
// var userName = prompt(promptText);

// //uses string concatenation
// var greeting = 'Hello, ' + userName + '!';
// console.log(greeting);


// ======== now, using SEXY syntax ===========
// // using let and const
// // Rule of thumb: use const until you get an error then use let
// const promptText = 'What is your name?';
// const userName = prompt(promptText);
// // const makes variables that can only be defined once
// // userName = userName + 'is a bozo';
// const greeting = 'Hello, ' + userName + '!';
// console.log(greeting);

//keyword let allows you to redefine
const promptText = 'What is your name?';
let userName = prompt(promptText);
userName = `${userName} is a bozo`;
//string interpolation aka template literals
// 1. replace with backticks
// 2. remove the + signs
// 3. wrap your variables in ${}
// you can use backticks instead of '' quotes if you want
const greeting = `Hello, ${userName}!`; //backticks and ${cashcurly}
console.log(greeting);

