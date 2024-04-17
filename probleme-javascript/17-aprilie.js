// arr = ['codewars', 'flick', 'code', 'wars']
//           0           1        2       3
// result = [True, False, False, False]

// https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/solutions/javascript

const flickSwitch = (arr) =>{
    const result = [];
    let valueToBeInserted = true;

    // arr.length = 4
    for (let i = 0;i < arr.length;i++) {
        if (arr[i] === 'flick') {
            valueToBeInserted = !valueToBeInserted;
        }
        result.push(valueToBeInserted);
    }

    return result;
}

const strings = ['codewars', 'flick', 'code', 'wars'];

const x = flickSwitch(strings);

console.log(x);

// -----------------

// sa se creeze o functie care primeste 2 parametrii reprezentand 2 numere
// functia sa returneze suma lor

// const getSum = (a, b) => {
//     return a + b;
// };

const getSum = (a, b) => a + b;

//  -------------- Filter ----------------
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// --- forma simpla ---
// const result = words.filter((word) => word.includes('es') === true);

// --- forma explicita ---
const result = words.filter((word) => {
  if (word.includes('es') === true) {
    return true;
  } else {
    return false;
  }
});

// --- forma simpla ---
// const result = words.filter((word) => word.length > 6);

// --- forma explicita ---
// const result = words.filter((word) => {
//   if(word.length > 6) {
//     return true;
//   } else {
//     return false;
//   }
// });

console.log(result);

