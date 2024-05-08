// Write a function which receives an array of ages as parameter and 
// return the oldest family member's age ( [15, 82, 6, 38, 35] -> 82 )

// 1400, 900, 800, 1600, 2700, 1900

const getTheOldestAge = (ages) => { // [15, 82, 6, 38, 35]
    let oldestAge = ages[0];

    for (let i = 1;i < ages.length;i++) {
        if (ages[i] > oldestAge) {
            oldestAge = ages[i];
        }
    }

    return oldestAge;
};

// Write a function which receives an array of ages as parameter and 
// return the young family member's age ( [15, 82, 6, 38, 35] -> 6 )
const getTheYoungestAge = (ages) => { // [15, 82, 6, 38, 35]
    let youngestAge = ages[0];

    for (let i = 1;i < ages.length;i++) {
        if (ages[i] < youngestAge) {
            youngestAge = ages[i];
        }
    }

    return youngestAge;
};

// Write a function which receives an array of ages as parameter and 
// return an array like this [youngest age, oldest age, difference between the oldest and youngest age]
const getAgesGap = (ages) => {
    const oldestAge = getTheOldestAge(ages);
    const youngestAge = getTheYoungestAge(ages);

    return [youngestAge, oldestAge, oldestAge - youngestAge];
}

getAgesGap([15, 82, 6, 38, 35]);
