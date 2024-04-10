const form = document.querySelector('.game-form');
const gameResult = document.querySelector('.game-result');
const gameHistoryContainer = document.querySelector('.game-history-container');

const gameHistory = [];

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

const generateHistory = () => {
    // stergem istoricul din pagina
    gameHistoryContainer.innerHTML = '';
    // pentru fiecare joc cream un paragraf pe care il adaugam in pagina
    gameHistory.forEach((game) => {
        const element = document.createElement('p');
        element.innerText = `${game.playerOneChoose} - ${game.playerTwoChoose}. Status: ${game.result}`;
        gameHistoryContainer.appendChild(element);
    });
}

const findWinner = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const playerOne = data.get('player-one-choose');
    const playerTwo = data.get('player-two-choose');

    gameResult.innerText = rps(playerOne, playerTwo);

    const gameData = {
        playerOneChoose: playerOne,
        playerTwoChoose: playerTwo,
        result: rps(playerOne, playerTwo),
    };

    gameHistory.push(gameData);

    generateHistory();
};

form.addEventListener('submit', findWinner);

// [
//     {
//         playerOneChoose: 'piatra',
//         playerTwoChoose: 'piatra',
//         result: 'Egalitate'
//     },
//     {
//         playerOneChoose: 'foarfeca',
//         playerTwoChoose: 'hartie',
//         result: 'Player-ul 1 a castigat'
//     },
// ]

console.log( localStorage.getItem('myCat') );