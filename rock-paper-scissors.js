const OPTIONS = ["rock", "paper", "scissors"];

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
        if (computerSelection === "paper") return `You lose! ${computerSelection} beats ${playerSelection}.`;
        if (computerSelection === "scissors") return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") return `You lose! ${computerSelection} beats ${playerSelection}.`;
        if (computerSelection === "rock") return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") return `You lose! ${computerSelection} beats ${playerSelection}.`;
        if (computerSelection === "paper") return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}