const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const calculatorNumber = document.querySelector('.calculator-number');

// varianta 1
// const updateCalculatorNumber = () => {
//     const number = parseInt(calculatorNumber.innerText);
//     if(number >= 10) {
//         calculatorNumber.style.fontSize = '60px';
//     }
// }

// const addOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) + 1;
//     // updateCalculatorNumber(parseInt(calculatorNumber.innerText));
//     updateCalculatorNumber();
// };

// plusButton.addEventListener('click', addOne);

// const minusOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) - 1;
// };

// minusButton.addEventListener('click', minusOne);

// varianta 2
// let number = 0;

// const addOne = () => {
//     number++;
//     calculatorNumber.innerText = number;

//     if(number >= 5) {
//         calculatorNumber.style.color = 'green';
//     }

//     if(number > -5 && number < 5) {
//         calculatorNumber.style.color = 'black';
//     }
// };

// plusButton.addEventListener('click', addOne);

// const minusOne = () => {
//     number--;
//     calculatorNumber.innerText = number;

//     if(number <= -5) {
//         calculatorNumber.style.color = 'red';
//     }

//     if(number > -5 && number < 5) {
//         calculatorNumber.style.color = 'black';
//     }
// };

// minusButton.addEventListener('click', minusOne);

// varianta 3
let number = 0;

const updateCalculatorNumber = () => {
    calculatorNumber.innerText = number;

    if(number >= 5) {
        calculatorNumber.style.color = 'green';
    }

    if(number > -5 && number < 5) {
        calculatorNumber.style.color = 'black';
    }

    if(number >= 10) {
        calculatorNumber.style.fontSize = '60px';
    } else {
        calculatorNumber.style.fontSize = '52px';
    }
}

const addOne = () => {
    number++;
    updateCalculatorNumber();
};

plusButton.addEventListener('click', addOne);

const minusOne = () => {
    number--;
    updateCalculatorNumber();
};

minusButton.addEventListener('click', minusOne);

// --------  Reset button -------
const resetButton = document.querySelector('.reset-button');
const numberOfResetsText = document.querySelector('.number-of-resets');
let numberOfResets = 0;

const resetCalculator = () => {
    number = 0;

    numberOfResets++;
    numberOfResetsText.innerText = `Calculatorul a fost resetat de ${numberOfResets} ori`;
    // numberOfResetsText.style.display = 'block';
    numberOfResetsText.style.opacity = '1';
    
    setTimeout(() => {
        // numberOfResetsText.style.display = 'none';
        numberOfResetsText.style.opacity = '0';
    }, 2000);
    
    updateCalculatorNumber();
};

resetButton.addEventListener('click', resetCalculator);
// resetButton.addEventListener('mouseover', resetCalculator);

// --------  Help button -------
const helpButton = document.querySelector('.question-mark-icon-container');

const showInstructions = () => {
    alert('Instructiuni .............. ');
};

helpButton.addEventListener('click', showInstructions);
