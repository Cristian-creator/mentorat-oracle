// ------- Varianta 1 ------
// const invert = (array) => {
//     const invertedArray = [];

//     for (let i = 0; i < array.length; i++) {
//       invertedArray.push(-array[i]);
//     }

//     return invertedArray;
// };

// ------- Varianta 2 ------
// [1,-2,3,-4,5] -> [-1,2,-3,4,-5]
const invert = (array) => {
    return array.map((element) => element * -1);
};