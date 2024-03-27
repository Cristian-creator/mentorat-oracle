const listOfColors = ['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186'];
//                        0          1           2         3          4

const colorSwitcherButton = document.querySelector('.color-switcher-button');
const colorSwitcherContainer = document.querySelector('.color-switcher-container');
const currentColor = document.querySelector('.color-switcher-text-color');

let index = 0;

const switchColor = () => {
    index++;

    if (index === 5) {
        index = 0;
    }

    colorSwitcherContainer.style.backgroundColor = listOfColors[index];
    currentColor.innerText = listOfColors[index];
};

colorSwitcherButton.addEventListener('click', switchColor);
