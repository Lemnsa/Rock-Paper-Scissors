// function to get computer choice
function getComputerChoice() {
    let values = ["rock","paper","scissors"];
    let randomIndex = Math.floor(Math.random() * 3); // select a random number between 0 and 3.
    // Math.floor() rounds down the decimal values
    let computerChoice = values[randomIndex];
    return computerChoice;
}


let humanChoice;

 
const buttons = document.querySelector(".btns");
buttons.addEventListener("click", (e) => {
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
    console.log(humanChoice);
});


// // function to play game
// function playGame() {
//     // player scores variables
//     let humanScore = 0;
//     let computerScore = 0;

// // function to play a round
// function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//         console.log("Tight game!");
//     }
//     else if (humanChoice === 'rock' && computerChoice === 'scissors') {
//         console.log("You Win! " + humanChoice + " beats "+ computerChoice + "!");
//         humanScore += 1;
//     }
//     else if (humanChoice === 'scissors' && computerChoice === 'paper') {
//         console.log("You Win! "+ humanChoice +"beats "+ computerChoice +"!");
//         humanScore += 1;
//     }
//     else if (humanChoice === 'paper' && computerChoice === 'rock') {
//         console.log("You Win! "+ humanChoice +" beats "+ computerChoice +"!");
//         humanScore += 1;
//     }
//     else {
//         console.log("You lose! " + computerChoice + " beats "+ humanChoice + "!");
//         computerScore += 1;
//     }
// }


//     // get a winner after the five rounds
//     console.log(humanScore === computerScore ? "It's a tie! Game Over!" : humanScore > computerScore ? "You win! Game Over!" : "You loose! Game Over!");

// }

// // playGame();