const allBoxes = document.querySelectorAll('.box');
const gameStatus = document.querySelector('.game-status')
const playAgainBtn = document.querySelector('.play-again')

let isGameOver = false;
let turn = 'X';

gameStatus.innerHTML = `${turn}'s Turn`

allBoxes.forEach(box => {
    box.addEventListener('click', function() {
        if (!isGameOver && box.innerHTML == '') {
            box.innerHTML = turn;
            if (checkWin()) {
                isGameOver = true;
                gameStatus.innerHTML = `${turn} Win`
                playAgainBtn.style.display = 'initial'
            }else if(isDraw()){
                isGameOver = true
                gameStatus.innerHTML = `Draw`
                playAgainBtn.style.display = 'initial'
            }else{
                changeTurn();
            }
        }
    });
});

playAgainBtn.addEventListener('click', function(){
    resetGame()
})

function changeTurn() {
    turn = (turn === 'X') ? '0' : 'X';
    gameStatus.innerHTML = `${turn}'s Turn`
}

function checkWin() {
    const allWinConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let winCondition of allWinConditions) {
        let [a, b, c] = winCondition;
        if (allBoxes[a].innerHTML !== '' &&
            allBoxes[a].innerHTML === allBoxes[b].innerHTML &&
            allBoxes[a].innerHTML === allBoxes[c].innerHTML) {
            return true;
        }
    }
    return false;
}

function resetGame(){
    isGameOver = false
    turn = 'X'
    allBoxes.forEach(box => {
        box.innerHTML = ''
    })
    gameStatus.innerHTML = "X's Turn"
    playAgainBtn.style.display = 'none'
}

function isDraw(){
    for (let box of allBoxes) {
        if (box.innerHTML === '') {
            return false;
        }
    }
    return true;
}