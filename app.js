
// global variables for store the score
let computerScore = 0;
let playerScore = 0;
let round = 0;
const WINNERSCORE = 5;

// get the buttons
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const results = document.querySelector(".results");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundScoreDisplay = document.querySelector(".round-score");
const winnerScoreDisplay = document.querySelector(".winner-score")
const buttons = document.querySelectorAll("button");

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

// create a function to get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    let randomNumber = Math.floor(Math.random() * choices.length); // create a random number between 1 and 3
    return choices[randomNumber];
}

// store the computer choice in a variable
let computerChoice = getComputerChoice();

// Create a function "playRound" to play one round
// the function accept the human and computer choice
function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) { // tied option
        return "Tied";
    } else if (
        (playerChoice == "rock" && computerChoice == "scissor") || // wins option
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissor" && computerChoice == "paper")) {

        // increase player score
        playerScore = playerScore + 1;

        // show the winner
        return "Player wins";
    } else if (
        (playerChoice == "rock" && computerChoice == "paper") || // lose option
        (playerChoice == "paper" && computerChoice == "scissor") ||
        (playerChoice == "scissor" && computerChoice == "rock")) {

        computerScore = computerScore + 1;
        return "Computer wins";
    }
}

function checkWinner() {
    if (playerScore === WINNERSCORE) {
        winnerScoreDisplay.textContent = "Player wins the game";
        disableButtons();
    } else if (computerScore === WINNERSCORE) {
        winnerScoreDisplay.textContent = "Computer wins the game";
        disableButtons();
    }
}

function updateScore() {
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}



buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        const playerChoice = e.target.className;
        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);

        roundScoreDisplay.textContent = `Round score: ${result}`;
        updateScore();
        checkWinner();
    })
})














