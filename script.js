// declare values for rock, paper, scissors
const rock = 1;
const paper = 2;
const scissors = 3;


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

    return selection;
}

