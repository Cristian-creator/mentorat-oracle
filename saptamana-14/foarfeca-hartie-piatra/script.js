const rps = (p1, p2) => {
    if (p1 === p2) {
        return "Egalitate";
    }

    if(p1 === 'foarfeca') {
        if (p2 === 'hartie') {
            return 'Player 1 a castigat';
        }
        if (p2 === 'piatra') {
            return 'Player 2 a castigat'
        }
    } else if (p1 === 'piatra') {
        if (p2 === 'hartie') {
            return 'Player 2 a castigat';
        }
        if (p2 === 'foarfeca') {
            return 'Player 1 a castigat'
        }
    } else {
        if (p2 === 'piatra') {
            return 'Player 1 a castigat';
        }
        if (p2 === 'foarfeca') {
            return 'Player 2 a castigat'
        }
    }
};

// ---- Player One ----
const playerOneButtons = document.querySelectorAll('.player-one-choose-button');

let playerOneChoose = '';

playerOneButtons.forEach((playerOneButton) => {
    playerOneButton.addEventListener('click', () => {
        // stergem clasa 'active' de pe fiecare buton al player-ului 1 
        playerOneButtons.forEach((button) => {
            button.classList.remove('active');
        });
        // adaugam clasa 'active' pe butonul pe care am dat click
        playerOneButton.classList.add('active');
        // ii luam valoarea si actualizam variabila playerOneChoose ( var 2 )
        playerOneChoose = playerOneButton.getAttribute('value');
    });
});

// ---- Player Two ----
const playerTwoButtons = document.querySelectorAll('.player-two-choose-button');

let playerTwoChoose = '';

playerTwoButtons.forEach((playerTwoButton) => {
    playerTwoButton.addEventListener('click', () => {
        // stergem clasa 'active' de pe fiecare buton al player-ului 1 
        playerTwoButtons.forEach((button) => {
            button.classList.remove('active');
        });
        // adaugam clasa 'active' pe butonul pe care am dat click
        playerTwoButton.classList.add('active');
        // ii luam valoarea si actualizam variabila playerOneChoose ( var 2 )
        playerTwoChoose = playerTwoButton.getAttribute('value');

        console.log(playerTwoChoose);
    });
});

// ---- Afla castigatorul ----
// ------  Varianta 2 ------
const findWinnerButton = document.querySelector('.section-container-submit-button');

const findWinner = () => {
    if (playerOneChoose === '' || playerTwoChoose === '') {
        alert('Ambii jucatori trebuie sa aleaga');
        // return;
    } else {
        const winner = rps(playerOneChoose, playerTwoChoose);
    
        alert(winner);
    }
};

findWinnerButton.addEventListener('click', findWinner);

// ------  Varianta 1 ------
// const findWinnerButton = document.querySelector('.section-container-submit-button');

// const findWinner = () => {
//     const playerOneButton = document.querySelector('.player-one-choose-button.active');
//     const playerTwoButton = document.querySelector('.player-two-choose-button.active');

//     if (playerOneButton === null || playerTwoButton === null) {
//         alert('Ambii jucatori trebuie sa aleaga');
//         // return;
//     } else {
//         const playerOneValue = playerOneButton.getAttribute('value');
//         const playerTwoValue = playerTwoButton.getAttribute('value');
    
//         const winner = rps(playerOneValue, playerTwoValue);
    
//         alert(winner);
//     }
// };

// findWinnerButton.addEventListener('click', findWinner);