// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

// "Sam Harris" => "S.H"
// "sam harris" => "S.H"
const abbrevName = (name) => {
    const firstLetter = name[0].toUpperCase(); // firstLetter = "S"
    const indexOfSpace = name.indexOf(" "); // indexOfSpace = 3
    const secondLetter = name[indexOfSpace + 1].toUpperCase(); // secondLetter = "H"

    // return firstLetter + "." + secondLetter;
    return `${firstLetter}.${secondLetter}`;
}

const abbrevName2 = (name) => {
    const firstLetter = name[0].toUpperCase(); // firstLetter = "S"
    
    let indexOfSpace = 0;

    for (let i = 0;i < name.length;i++) {
        if (name[i] === " ") {
            indexOfSpace = i;
            break;
        }
    }

    const secondLetter = name[indexOfSpace + 1].toUpperCase(); // secondLetter = "H"

    // return firstLetter + "." + secondLetter;
    return `${firstLetter}.${secondLetter}`;
}

const abbrevName3 = (name) => {
    const modifiedName = name.replaceAll('-', ' '); // name = "Sam Harris-Miguel" -> modifiedName = "Sam Harris Miguel"
    const words = name.split(' '); // "Sam Harris Miguel" -> ["Sam", "Harris", "Miguel"]

    const array1 = words.map((name) => name.substring(0, 1)); // ["S", "H"]

    const abrevInitial = `${array1[0]}.${array1[1]}`;

    return abrevInitial.toUpperCase();
};

