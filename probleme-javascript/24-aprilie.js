const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
// const vowels = 'aeiouAEIOU';

// ---- varianta 4 -----
const replace = (sentence) => {
    let result = sentence;

    for (let i = 0;i < vowels.length;i++) {
        result.replaceAll(vowels[i], '!');
    }

    return result;
}

const x = replace("Hei, Cristian!");

// ---- varianta 3 -----
// const replace = (sentence) => {
//     let result = '';

//     for (let i = 0; i < sentence.length; i++) {
//         if (sentence[i] === 'a' || sentence[i] === 'e') {
//             result += '!';
//         } else {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// ---- varianta 2 -----
// const replace = (sentence) => {
//     let result = sentence;
    
//     for (let i = 0;i < result.length;i++) {
//         if (vowels.includes(sentence[i]) === true) {
//             result = result.substring(0, i) + '!' + result.substring(i + 1, result.length);
//         }
//     }

//     return result;
// }

// ---- varianta  1 ------
// const replace = (sentence) => {
//     let result = sentence;
    
//     for (let i = 0;i < result.length;i++) {
//         if (sentence[i] === 'a' || sentence[i] === 'e') {
//             // "Hei!" -> "H" "i!"
//             // sentence[i] = '!';
//             result = result.substring(0, i) + '!' + result.substring(i + 1, result.length);
//         }
//     }

//     return result;
// }
