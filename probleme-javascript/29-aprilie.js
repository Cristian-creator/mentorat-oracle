// [5, 1, 0, 10, 0, 0, 7] -> 3

// --- Varianta 1 ---
const aparitii = (numbers) => {
    let n = 0;

    for (let i = 0; i < numbers.length; i++) {
        // if (numbers[i].toString().includes('0') === true) {
        if (numbers[i] === 0) {
            n += 1;
        }
    }

    return n;
};

// --- Varianta 2 ---
// const aparitii = (numbers) => {
//     const zerouri = numbers.filter((number) => number === 0); // [0, 0, 0]

//     return zerouri.length;
// }

// --- Varianta 3 ---
// const aparitii = (numbers) => numbers.filter((number) => number === 0).length;
