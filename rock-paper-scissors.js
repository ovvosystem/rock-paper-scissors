const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice(choice) {
    choice = choice.toLowerCase();
    if (OPTIONS.includes(choice)) {
        return choice;
    } else {
        return "";
    }
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
    if (playerScore > computerScore) console.log(
        `You won! Final score ${playerScore} X ${computerScore}`);
    else if (playerScore < computerScore) console.log(
        `You lose! Final score ${playerScore} X ${computerScore}`);
    else console.log(
        `It's a draw! Final score ${playerScore} X ${computerScore}`);
}

const playButton = document.getElementById("play");
playButton.addEventListener("click", game);