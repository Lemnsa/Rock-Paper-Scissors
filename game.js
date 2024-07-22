// function to get computer choice
function getComputerChoice() {
    let values = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // select a random number between 0 and 3.
    // Math.floor() rounds down the decimal values
    let computerChoice = values[randomIndex];
    return computerChoice;
}


let humanChoice;
let computerChoice = getComputerChoice();

let humanScore = 0;
let computerScore = 0;
 
// display each round's result
let showRoundResults = (result) => {
    let resultDiv = document.getElementById("roundResult");
    resultDiv.innerText = result;
}

// display each round's scores
let showRoundScores = (human, computer) => {
    let humanScoreDiv = document.getElementById("humanScore");
    let computerScoreDiv = document.getElementById("computerScore");
    humanScoreDiv.innerText = human;
    computerScoreDiv.innerText = computer;
}

const finalResultsDiv = document.getElementById("mainResults");
const buttons = document.querySelector(".btns");
buttons.addEventListener("click", (e) => {
    computerChoice = getComputerChoice();
    let targetButton = e.target;
    let buttonId = targetButton.id;
    switch(buttonId) {
        case 'rock':
            humanChoice = 'rock';
            break;
        
        case 'paper':
            humanChoice = 'paper';
            break;
        
        case 'scissors':
            humanChoice = 'scissors';
            break;
    }
     playRound(humanChoice, computerChoice);
    
    //  show computer and human choices
        const humanChoiceDiv = document.getElementById("humanChoice");
        humanChoiceDiv.innerText = humanChoice.toUpperCase();

        const computerChoiceDiv = document.getElementById("computerChoice");
        computerChoiceDiv.innerText = computerChoice.toUpperCase();

        if(humanScore == 5){
            finalResultsDiv.innerText = "You WON!";
            computerScore = 0;
            humanScore = 0;
        }
        else if(computerScore == 5){
            finalResultsDiv.innerText = "You LOSE!";
            computerScore = 0;
            humanScore = 0;
        }else {
            finalResultsDiv.innerText = '';
        }
});

function playRound(humanChoice, computerChoice) {
    let result;
    if (humanChoice === computerChoice) {
        result = "Tie game!";
        showRoundResults(result);
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        result = "You win!";
        showRoundResults(result);
        humanScore += 1;
        showRoundScores(humanScore, computerScore);
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        result = "You win!";
        showRoundResults(result);
        humanScore += 1;
        showRoundScores(humanScore, computerScore);
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        result = "You win!";
        showRoundResults(result);
        humanScore += 1;
        showRoundScores(humanScore, computerScore);
    }
    else {
        result = "You Lose!";
        showRoundResults(result);
        computerScore += 1;
        showRoundScores(humanScore, computerScore);
    }
}


// // function to play game
// function playGame() {
//     // player scores variables


// // function to play a round



//     // get a winner after the five rounds
//     console.log(humanScore === computerScore ? "It's a tie! Game Over!" : humanScore > computerScore ? "You win! Game Over!" : "You loose! Game Over!");

// }

// // playGame();