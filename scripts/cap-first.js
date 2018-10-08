// Arrays aka python lists
// objects aka python dictionaries
// _custom_ functions
// classes optional

// for (let i = 0; i < 5; i++){
//     console.log(`woooooooooooof`);
// }

const whoami = `i'm batman`;
// in python, this would be: whoami[0:1]
const first = whoami.slice(0, 1).toUpperCase();
// in python, this would be: whoami[1:]
const rest = whoami.slice(1);

console.log(first + rest);

console.log(`The length of the string is ${whoami.length}`);
