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
        selection = "rock";
    } else if (randomNum === paper) {
        selection = "paper";
    } else {
        selection = "scissors";
    }
    console.log(selection);
    return selection;
}

function playRound (playerSelection, computerSelection) {
     // if player selects rock and computer selects rock output its a tie, no points awarded
     if (playerSelection === computerSelection) {
        console.log(`It's a tie. Player selected ${playerSelection} and Computer selected ${computerSelection}`);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log(`Computer wins! Paper beats Rock.`);
        computerPoints++;
    // if player selects ROCK and computer selects SCISSORS - Player gets 1 point
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log(`Player wins! Rock beats Scissors`);
        playerPoints++;
    // if player selects PAPER and computer selects ROCK - Player gets 1 point
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log(`Player wins! Paper beats Rock`);
        playerPoints++;
    // if player selects PAPER and computer selects SCISSORS - Computer gets 1 point
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log(`Computer wins! Scissors beats Paper`);
        computerPoints++;
    // if player selects SCISSORS and computer selects ROCK - Computer gets 1 point
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log(`Computer wins! Rock beats Scissors`);
        computerPoints++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`Player wins! Scissors beats Paper`);
        playerPoints++;
    } else {
        console.log(`Player input error, round lost.`)
    }
    
    return console.log(`Player Points = ${playerPoints} | Computer Points = ${computerPoints}`);

}

let computerSelection;
let playerSelection;


function game () {
    // loop game for 5 rounds
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt(`What do you choose? Enter "rock", "paper", or "scissors"`);
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    // show result of who wins entire game
    if (playerPoints > computerPoints){
        console.log(`Player wins!`);
    } else if (playerPoints < computerPoints) {
        console.log(`Computer wins! Player loses. :(`);
    } else {
        console.log(`The round is a tie!`);
    }

}

game();