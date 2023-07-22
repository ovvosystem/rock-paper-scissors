const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice(choice) {
    /*
    Checks if the player's input is a valid choice
    If it is, returns a standardized version of the choice
    Otherwise, returns an empty string
    */
    choice = choice.toLowerCase();
    if (OPTIONS.includes(choice)) {
        return choice;
    } else {
        return "";
    }
}

function determineWin(playerSelection, computerSelection) {
    /* Moves are grabbed by their index, rock is equal to 0,
    paper is equal to 1, and scissors is equal to 2. 
    The winner is determined by the formula (move1 - move2) % 3, 
    where 0 means a draw, 1 means move1 wins, and 2 means move2 wins */
    const playerIndex = OPTIONS.indexOf(playerSelection);
    const computerIndex = OPTIONS.indexOf(computerSelection);
    return (playerIndex - computerIndex) % 3;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Draw! You both picked ${playerSelection}`;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        };
        if (computerSelection === "scissors") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
        if (computerSelection === "rock") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}.`;
        }
        if (computerSelection === "paper") {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}.`;
        }
    }
}

function game() {
    // Plays five rounds of Rock, Paper, Scissors and keeps track of the score
    let playerSelection, computerSelection;
    let round = 1;
    while (round <= 5) {
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice(prompt("Pick rock, paper or scissors"));
        if (playerSelection) {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log(`That is not a valid choice. Pick one of rock, paper or scissors.`);
            continue;
        }
        round++;
    }
    // Logs winner and the final score
    if (playerScore > computerScore) console.log(
        `You won! Final score ${playerScore} X ${computerScore}`);
    else if (playerScore < computerScore) console.log(
        `You lose! Final score ${playerScore} X ${computerScore}`);
    else console.log(
        `It's a draw! Final score ${playerScore} X ${computerScore}`);
}

// Start a game when the button is pressed
const playButton = document.getElementById("play");
playButton.addEventListener("click", game);