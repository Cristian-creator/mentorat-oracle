const plusButton = document.querySelector('.plus-button');
const minusButton = document.querySelector('.minus-button');
const calculatorNumber = document.querySelector('.calculator-number');

// varianta 1
// const addOne = () => {
//     calculatorNumber.innerText = parseInt(calculatorNumber.innerText) + 1;
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