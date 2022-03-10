let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;

const playerSelect = document.querySelectorAll(`.option`);
playerSelect.forEach( option => { option.addEventListener('click', playRound)
});

const buttonReset = document.querySelector(`.reset`);
buttonReset.addEventListener('click', resetGame);

const roundResult = document.querySelector(`.round-result`);
const roundNum = document.querySelector(`.round`);
const playerScore = document.querySelector(`.your-score`);
const computerScore = document.querySelector(`.computer-score`);
const scoreText = document.querySelector(`.score-text`);


// function computerPlay; randomly return either rock, paper or scissors
function computerPlay () {
    const rock = 1;
    const paper = 2;
    const scissors = 3;
    let randomNum = Math.floor(Math.random()*3) + 1;
    let selection;
    // define if statement that will print rock, paper, scissors when randonNum = rock, paper or scissors
    if (randomNum === rock) {
        selection = "rock";
    } else if (randomNum === paper) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    console.log(selection);
    return selection;
}



function checkRound (player, computer) {
    if (player === computer) {
        roundResult.innerText = `It's a tie.`;
    } else if (player === "rock" && computer === "paper") {
        roundResult.innerText = `Computer wins! Paa beats Guu.`;
        computerPoints++;
    // if player selects ROCK and computer selects SCISSORS - Player gets 1 point
    } else if (player === "rock" && computer === "scissors") {
        roundResult.innerText = `Player wins! Guu beats Choki`;
        playerPoints++;
    // if player selects PAPER and computer selects ROCK - Player gets 1 point
    } else if (player === "paper" && computer === "rock") {
        roundResult.innerText = `Player wins! Paa beats Guu`;
        playerPoints++;
    // if player selects PAPER and computer selects SCISSORS - Computer gets 1 point
    } else if (player === "paper" && computer === "scissors") {
        roundResult.innerText = `Computer wins! Choki beats Paa`;
        computerPoints++;
    // if player selects SCISSORS and computer selects ROCK - Computer gets 1 point
    } else if (player === "scissors" && computer === "rock") {
        roundResult.innerText = `Computer wins! Guu beats Choki`;
        computerPoints++;
    } else if (player === "scissors" && computer === "paper") {
        roundResult.innerText = `Player wins! Choki beats Paa`;
        playerPoints++;
    } else {
        roundResult.innerText = `Player input error, round lost.`;
    }

}

function gameScore() {
    // show result of who wins entire game
    rounds++;
    roundNum.innerText = `Round: ${rounds}`;
    playerScore.innerText = `Your Score: ${playerPoints}`;
    computerScore.innerText = `Computer Score: ${computerPoints}`;
    
    if (rounds === 5) {
        if (playerPoints > computerPoints) {
            scoreText.innerText = `Game over! You win!`;
            playerSelect.forEach ( option => option.classList.add('off'));
        } else if (playerPoints < computerPoints) {
            scoreText.innerText = `Game over! You lose, the computer beat you!`;
            playerSelect.forEach ( option => option.classList.add('off'));
        } else {
            scoreText.innerText = `Game over! Some how the game was a draw!`;
            playerSelect.forEach ( option => option.classList.add('off'));
        }
    }

}

function playRound (e) {
    // if player selects rock and computer selects rock output its a tie, no points awarded
    const computerSelection = computerPlay();
    let playerSelection = "empty";

    if (this.classList.contains("rock")) playerSelection = "rock";
    if (this.classList.contains("paper")) playerSelection = "paper";
    if (this.classList.contains("scissors")) playerSelection = "scissors";

    checkRound(playerSelection, computerSelection);
    gameScore();
    
    return ;
}


function resetGame (e) {
    rounds = 0;
    playerPoints = 0;
    computerPoints = 0;
    roundNum.innerText = `Round: ${rounds}`;
    playerScore.innerText = `Your Score: ${playerPoints}`;
    computerScore.innerText = `Computer Score: ${computerPoints}`;
    scoreText.innerText = ``;
    playerSelect.forEach ( option => option.classList.remove('off'));

}
