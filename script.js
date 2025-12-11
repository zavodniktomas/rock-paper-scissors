playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log("Human Choice: " + humanSelection);
        console.log("Computer Choice: " + computerSelection);

        const result = playRound(humanSelection, computerSelection);

        if (result === "win") {
            humanScore++;
            console.log(`You WIN this round! Score: Human ${humanScore} - Computer ${computerScore}`);
        } else if (result === "lose") {
            computerScore++;
            console.log(`You LOSE this round! Score: Human ${humanScore} - Computer ${computerScore}`);
        } else {
            console.log(`It is a TIE! Score: Human ${humanScore} - Computer ${computerScore}`);
        }
    }

    if (humanScore > computerScore) {
        console.log(`Game over: YOU WIN! Final Score: Human ${humanScore} - Computer ${computerScore}`)
    } else {
        console.log(`Game over: YOU LOSE! Final Score: Human ${humanScore} - Computer ${computerScore}`)
    }

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

    function playRound(humanSelection, computerSelection) {
        if (humanSelection === computerSelection) {
            return "tie";
        } else if
            ((humanSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (humanSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
            (humanSelection === 'PAPER' && computerSelection === 'ROCK')) {
            return "win";
        } else {
            return "lose";
        }
    }
}