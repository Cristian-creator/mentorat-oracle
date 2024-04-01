const firstNameInput = document.querySelector('[name="first-name"]');
const firstNameText = document.querySelector('.first-name-text');

const handleFirstNameInput = () => {
    firstNameText.innerText = firstNameInput.value;
};

firstNameInput.addEventListener('input', handleFirstNameInput);

// ---- String Includes -----

const numeleMeu = 'Cristian';

if (numeleMeu.includes('sti') === true) {
    alert('Numele tau include sti');
}
