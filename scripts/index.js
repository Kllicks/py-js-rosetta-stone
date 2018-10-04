// start with a hard-coded value until you know your program works
// then switch to prompting the user

let theDay = prompt("Day (0-6)?");

// to convert from a string to a number,
// use parseInt and provide base 10 as an argument
theDay = parseInt(theDay, 10);

//const theDay = prompt("Day (0-6)?");
// const theDay = 3;
let dayName = `invalid choice`;

// must you parentheses for your condition even if its one
// loose equality is ==
// strict equality is ===
// by default, use strict equality ===
// "threequals"
if (theDay === 0) { // and curly braces!
    //you can leave off the curly braces 
    //but your body can only have one statement
    //any statement after the first will get run
    //regardless of wheter the condition is true or not
    dayName = `Sunday`;
} else if (theDay === 1) {
    dayName = `Monday`;
} else if (theDay === 2) {
    dayName = `Tuesday`;
} else if (theDay === 3) {
    dayName = `Wednesday`;
} else if (theDay === 4) {
    dayName = `Thursday`;
} else if (theDay === 5) {
    dayName = `Friday`;
} else if (theDay === 6) {
    dayName = `Saturday`;
}
// the body of an if statement is surrounded by curly braces. 
// and does not require a semi-colon after the curly braces

console.log(dayName);