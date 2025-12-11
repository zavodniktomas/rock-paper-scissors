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

function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors.")

    return choice.toUpperCase ;
}




console.log("Computer choice " + getComputerChoice());
console.log("Human choice " + getHumanChoice());