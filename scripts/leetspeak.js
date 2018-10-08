// leetspeak

const text = `you wish you were batman`;

const lettersToConvert = ["A", "E","G","I","O","S","T"];
const numbers = [4,3,6,1,0,5,7];

const textToTranslate = text.toUpperCase();
let translation = ``;

// ES6 style array iteration
// Basically the equivalent of pythong's for loop
// for (let letter of text.toUpperCase()) {

// "block scoping"
for (let letter of textToTranslate) {
    // console.log(letter);
    // Check to see if the current letter is in `lettersToConvert`
    
    let index = lettersToConvert.indexOf(letter);
    // console.log(lettersToConvert.indexOf(letter))
    if (index !== -1) {
        // if so, grab the index

        // use the index to grab the corresponding item from `numbers`
        translation = translation + numbers[index];
    } else {
        translation = translation + letter;
    }

    // else, just use the original letter
}

console.log(translation);