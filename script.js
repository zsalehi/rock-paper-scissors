// declare values for rock, paper, scissors
const rock = 1;
const paper = 2;
const scissors = 3;
let playerPoints = 0;
let computerPoints = 0;

// function computerPlay; randomly return either rock, paper or scissors
function computerPlay () {
    let randomNum = Math.floor(Math.random()*3) + 1;
    let selection;
    // define if statement that will print rock, paper, scissors when randonNum = rock, paper or scissors
    if (randomNum === rock) {
        selection = "Rock";
    } else if (randomNum === paper) {
        selection = "Paper";
    } else {
        selection = "Scissors";
    }
    console.log(selection);
    return selection;
}

function playRound (playerSelection, computerSelection) {
    // if player selects rock and computer selects rock output its a tie, no points awarded
    if (playerSelection === "rock" && computerSelection === "Paper") {
        console.log(`Computer wins! Paper beats Rock.`);
        computerPoints++;
    // if player selects ROCK and computer selects SCISSORS - Player gets 1 point
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        console.log(`Player wins! Rock beats Scissors`);
        playerPoints++;
    // if player selects PAPER and computer selects ROCK - Player gets 1 point
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        console.log(`Player wins! Paper beats Rock`);
        playerPoints++;
    // if player selects PAPER and computer selects SCISSORS - Computer gets 1 point
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        console.log(`Computer wins! Scissors beats Paper`);
        computerPoints++;
    // if player selects SCISSORS and computer selects ROCK - Computer gets 1 point
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        console.log(`Computer wins! Rock beats Scissors`);
        computerPoints++;
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        console.log(`Player wins! Scissors beats Paper`);
        playerPoints++;
    } else {
        console.log(`It's a tie.`)
    }
    
    return console.log(`Player Points = ${playerPoints} | Computer Points = ${computerPoints}`);

}

const computerSelection = computerPlay();
const playerSelection = "rock";

playRound(playerSelection, computerSelection);