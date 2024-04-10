// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

// ['bad', 'bad', 'bad']) -> 'Fail!'
// ['good', 'bad', 'bad', 'bad', 'bad']) -> 'Publish!'
// ['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) -> 'I smell a series!'
// const well = (x) => {
//     let numberOfGoodIdeas = 0;

//     for (let i = 0;i < x.length;i++) {
//         if (x[i] === 'good') {
//             numberOfGoodIdeas++; // numberOfGoodIdeas += 1;
//         }
//     }

//     if (numberOfGoodIdeas === 0) {
//         return 'Fail!';
//     }

//     if (numberOfGoodIdeas === 1 || numberOfGoodIdeas === 2) {
//         return 'Publish!';
//     }

//     // if (numberOfGoodIdeas > 2) {
//         return 'I smell a series!';
//     // }

// }

const well = (x) => {
    // higher order function = o functie care primeste ca parametru
    // o alta functie
    const goodIdeas = x.filter((idea) => idea === 'good');

    const numberOfGoodIdeas = goodIdeas.length;

    if (numberOfGoodIdeas === 0) {
        return 'Fail!';
    }

    if (numberOfGoodIdeas === 1 || numberOfGoodIdeas === 2) {
        return 'Publish!';
    }

    // if (numberOfGoodIdeas > 2) {
        return 'I smell a series!';
    // }
}

const ideas = ['good', 'bad', 'bad', 'good', 'bad', 'bad'];

well(ideas);