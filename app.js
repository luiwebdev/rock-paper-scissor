// get the buttons
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(e.target.className);

        switch (e.target.className) {
            case "rock":
                playRound(e.target.className, getComputerChoice());
                break;
            case "paper": 
                playRound(e.target.className, getComputerChoice());
                break;
            case "scissor":
                playRound(e.target.className, getComputerChoice());
        }

    })
})

// rockBtn.addEventListener("click", playRound(getHumanChoice(), getComputerChoice()))

// create a function to get the computer choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1; // create a random number between 1 and 3

    // depends of the random number, return choices
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissor"
    }
}

// create a function to get human choice
function getUserChoice() {

    // ask the user a choice
    // let userChoice = prompt("rock, paper or scissor").toLowerCase();
    let userChoice = "rock, paper or scissor".toLowerCase();

    return userChoice;
}

// store the computer choice in a variable
let computerChoice = getComputerChoice();

// store the human choice in a variable
// let userChoice = getUserChoice();
// console.log(`User: ${getUserChoice}`)


// global variables for store the score
let computerScore = 0;
let userScore = 0;


// Create a function named playGame that call playRound 5 times
// function playGame() {

// Create a function "playRound" to play one round
// the function accept the human and computer choice
function playRound(userChoice, computerChoice) {
    console.log("User: " + userChoice);
    console.log("Computer: " + computerChoice);

    // first we are going to write the user win options
    if (userChoice == "rock" && computerChoice == "scissor") {

        // show the winner
        console.log("user Wins");

        // increase user score
        userScore = userScore + 1;

    } else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("user Wins");
        userScore = userScore + 1;

    } else if (userChoice == "scissor" && computerChoice == "paper") {
        console.log("user Wins");
        userScore = userScore + 1;

        // second we write the computer win options
    } else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Wins");
        computerScore = computerScore + 1;
    } else if (userChoice == "paper" && computerChoice == "scissor") {
        console.log("Computer Wins");
        computerScore = computerScore + 1;
    } else if (userChoice == "scissor" && computerChoice == "rock") {
        console.log("Computer Wins");
        computerScore = computerScore + 1;

        // third we write tied options
    } else if (userChoice == "rock" && computerChoice == "rock") {
        console.log("Tied");
    } else if (userChoice == "paper" && computerChoice == "paper") {
        console.log("Tied");
    } else if (userChoice == "scissor" && computerChoice == "scissor") {
        console.log("Tied");
    }
}

// playRound(userChoice, computerChoice);
// playRound(userChoice, computerChoice);
playRound(getUserChoice(), getComputerChoice);
console.log("user Score: " + userScore);
playRound(getUserChoice(), getComputerChoice);
console.log("user Score: " + userScore);












