// function to get computer choice
function getComputerChoice() {
    let values = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // select a random number between 0 and 3.
    // Math.floor() rounds down the decimal values
    let computerChoice = values[randomIndex];
    return computerChoice;
}

getComputerChoice();

// function to get user choice 
function getHumanChoice() {
    let humanChoice = prompt("Enter your choice [Rock, Paper, Scissors]");
    return humanChoice.toLowerCase(); // convert humanChoice tolowerCase
}

getHumanChoice();

// player scores variables
let humanScore = 0;
let computerScore = 0;