const textToTranslate = `you TOTALLY wish you were Batman`;

// const textToTranslate = text.toUpperCase();
// let translation = ``;

// a funciton that accepts a letter as an argument
// it will return either the translation
// or the original letter

// equivalent python:
// def translate(letter):
function translate(letter) {
    // letter = letter.toUpperCase();
    const upperLetter = letter.toUpperCase();
    const lettersToNumbers = {
        'A': 4,
        'E': 3,
        'G': 6,
        'I': 1,
        'O': '0',
        'S': 5,
        'T': 7,
        // 'test': `I am a hipster string`
    };

    const replacement = lettersToNumbers[upperLetter];
    // if (replacement) {
    //     return replacement;
    // } else {
    //     return letter;
    // }
    // Return replacement if its truthy
    // else return letter
    return replacement || letter;
    // aka "short circuit evaluation"
}

function translateSentence(sentence) {
    let translation = ``;
    
    for (let character of sentence) {
        translation = translation + translate(character);
    }

    return translation
}

console.log(translateSentence(textToTranslate));


// console.log(translation);