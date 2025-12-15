console.log("Hello World");

// Create a function that computer return "rock", "paper" or "scissor"
function getComputerChoice() {

    // create a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    // depends of the random number, return choices
    if (randomNumber == 1) {
        return "rock";
    } else if (randomNumber == 2) {
        return "paper";
    } else {
        return "scissor"
    }
}

// Create a function that human return "rock", "paper" or "scissor"
function getHumanChoice() {

    // ask the user a choice
    let humanChoice = prompt("rock, paper or scissor").toLowerCase();

    return humanChoice;
}

// store the computer choice in a variable
let computerChoice = getComputerChoice();

// store the human choice in a variable
// let humanChoice = getHumanChoice();


// global variables for store the score
let computerScore = 0;
let humanScore = 0;


// Create a function named playGame that call playRound 5 times
function playGame() {

    // Create a function "playRound" to play one round
    // the function accept the human and computer choice
    function playRound(humanChoice, computerChoice) {

        // first we are going to write the human win options
        if (humanChoice == "rock" && computerChoice == "scissor") {

            // show the winner
            console.log("Human Wins");

            // increase human score
            humanScore = humanScore + 1;

        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("Human Wins");
            humanScore = humanScore + 1;

        } else if (humanChoice == "scissor" && computerChoice == "paper") {
            console.log("Human Wins");
            humanScore = humanScore + 1;

            // second we write the computer win options
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("Computer Wins");
            computerScore = computerScore + 1;
        } else if (humanChoice == "paper" && computerChoice == "scissor") {
            console.log("Computer Wins");
            computerScore = computerScore + 1;
        } else if (humanChoice == "scissor" && computerChoice == "rock") {
            console.log("Computer Wins");
            computerScore = computerScore + 1;

            // third we write tied options
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Tied");
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Tied");
        } else if (humanChoice == "scissor" && computerChoice == "scissor") {
            console.log("Tied");
        }
    }

    playRound(getHumanChoice(), computerChoice);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    playRound(getHumanChoice(), computerChoice);
     console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    playRound(getHumanChoice(), computerChoice);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    playRound(getHumanChoice(), computerChoice);
     console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    playRound(getHumanChoice(), computerChoice);
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    
}

playGame();











