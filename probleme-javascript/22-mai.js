// 1. Write a function, isItLetter which tells us if a given character is a letter or not.
// https://www.codewars.com/kata/57a06b07cf1fa58b2b000252/train/javascript

const isItLetter2 = (letter) => {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (letters.includes(letter)) {
        return true;
    }
    
    return false;
};


const isItLetter3 = (letter) => {
    const parsedLetter = letter.toLowerCase();
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < letters.length; i++) {
        if (parsedLetter === letters[i]) {
            return true;
        }
    }

    return false;
};


const isItLetter = (letter) => { // "5"
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < letters.length; i++) {
        if (letter === letters[i]) {
            return true;
        }
    }

    return false;
};

isItLetter('b');

// 2. Write a function, hasOnlyLetters which tells us if a given string contains only letters. 
// Note: the given string can contain either letters or numbers

const hasOnlyLetters = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (isItLetter(string[i]) === false) {
            return false;
        }
    }
    return true;
}

const hasOnlyLetters2 = (sir) => { // "Erh5ard"
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < sir.length; i++) {
        if (letters.includes(sir[i]) === false) {
            return false;
        }
    }
    return true;
};

hasOnlyLetters2("Erh5ard");