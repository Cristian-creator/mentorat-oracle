const messages = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
// 1, 7, 13 ...
// 6x + 1

// 2, 8, 14 
// 6x + 2

// nbPetals % 6
// 0
// 1
// 2
// 3
// 4
// 5

// to action: mereu cand rezolvi o problema noteaza-ti cat mai multe cazuri

const howMuchILoveYou = (nbPetals) => {
    // ---- varianta 4 ----
    // return messages[(nbPetals - 1) % messages.length]

    // ---- varianta 3 ----
    if (nbPetals % 6 !== 0) {
        return messages[nbPetals % 6];
    }

    return messages[5];
    // if (nbPetals % 6 !== 0) {
    //     return messages[nbPetals % 6];
    // } else {
    //     return messages[5];
    // }
    // ----- varianta 2 -----
    // if (nbPetals % 6 !== 0) { // 1, 7, 13 ...
    //     return messages[nbPetals % 6];
    // }

    // if (nbPetals % 6 === 0) { // 6, 12, 18 ....
    //     return messages[5];
    // }
    // ------ varianta 1 ---
    // if (nbPetals % 6 === 1) { // 1, 7, 13 ...
    //     return messages[0];
    // }
    // if (nbPetals % 6 === 2) { // 2, 8, 14 ...
    //     return messages[1];
    // }
    // if (nbPetals % 6 === 3) { // 3, 9, 15 ...
    //     return messages[2];
    // }
    // if (nbPetals % 6 === 4) { // 4, 10, 16 ...
    //     return messages[3];
    // }
    // if (nbPetals % 6 === 5) { // 5, 11, 17 ...
    //     return messages[4];
    // }
    // if (nbPetals % 6 === 0) { // 6, 12, 18 ....
    //     return messages[5];
    // }
}
