// -------  Rezolvare exercitiu 1 & 2 - Varianta 1 ------
// const calculatorNumber = document.querySelector('.calculator-button');
// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');
// const calculatorResult = document.querySelector('.calculator-result');

// const calculate = () => {
//     console.log('test');
//     const firstNumber = parseInt(firstNumberInput.value);
//     const secondNumber = parseInt(secondNumberInput.value);
//     calculatorResult.innerText = firstNumber + secondNumber;
// };

// calculatorNumber.addEventListener('click', calculate);

// -------  Rezolvare exercitiu 1 & 2 - Varianta 2 ------
const calculatorForm = document.querySelector('.calculator-form');
const calculatorResult = document.querySelector('.calculator-result');

const calculate = (e) => {
    e.preventDefault();

    const formData = new FormData(calculatorForm);

    let firstNumber = formData.get('first-number');
    let secondNumber = formData.get('second-number');

    if(firstNumber.includes('e') || secondNumber.includes('e')) {
        alert('Please enter only numbers');
        return;
    }

    firstNumber = parseFloat(firstNumber); // '3.5' -> 3.5
    secondNumber = parseFloat(secondNumber);

    // Number.isInteger(3.5) - false
    // Number.isInteger(3) - true
    if(Number.isInteger(firstNumber) === false || Number.isInteger(secondNumber) === false) {
        alert('Please enter only integer numbers');
        return;
    }

    calculatorResult.innerText = firstNumber + secondNumber;
};

calculatorForm.addEventListener('submit', calculate);

// ------  Setup input-uri ------
// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');

// const handleFirstInputChange = () => {
//     if(firstNumberInput.value.includes('e')) {
//         firstNumberInput.value = firstNumberInput.value.replace('e', '');
//         // "123e" -> "123"
//     }
// }

// firstNumberInput.addEventListener('input', handleFirstInputChange);