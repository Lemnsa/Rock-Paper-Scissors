// function to get computer choice
function getComputerChoice() {
    let values = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // select a random number between 0 and 3.
    // Math.floor() rounds down the decimal values
    let computerChoice = values[randomIndex];
    return computerChoice;
}


// function to get user choice 
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice [Rock, Paper, Scissors]");
    return humanChoice.toLowerCase(); // convert humanChoice tolowerCase
}


// function to play game
function playGame() {
    // player scores variables
    let humanScore = 0;
    let computerScore = 0;

// function to play a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tight game!");
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You Win! " + humanChoice + " beats "+ computerChoice + "!");
        humanScore += 1;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You Win! "+ humanChoice +"beats "+ computerChoice +"!");
        humanScore += 1;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You Win! "+ humanChoice +" beats "+ computerChoice +"!");
        humanScore += 1;
    }
    else {
        console.log("You lose! " + computerChoice + " beats "+ humanChoice + "!");
        computerScore += 1;
    }
}

for (let i=1; i<=5; i++) {
    // players selections
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

}

playGame();