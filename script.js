function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors.")

    return choice.toUpperCase();
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It is a TIE!")
    } else if ((humanSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (humanSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (humanSelection === 'PAPER' && computerSelection === 'ROCK')) {
        console.log("You WIN!")
        humanScore++;
    }
    else {
        console.log("You LOSE!")
        computerScore++;
    }
}

playRound(humanSelection, computerSelection)

console.log("Computer choice " + computerSelection + " score " + computerScore);
console.log("Human choice " + humanSelection + " score " + humanScore);