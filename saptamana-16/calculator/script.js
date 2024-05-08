const increaseButton = document.querySelector('.increase-button');
const calculatorNumber = document.querySelector('.calculator-number');

let currentNumber = 0;

const increaseNumber = () => {
    currentNumber++;

    calculatorNumber.innerText = currentNumber;
}

increaseButton.addEventListener('click', increaseNumber);
