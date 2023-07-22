// Global DOM elements
const container = document.getElementById("container");
const results = document.getElementById("results");
const choiceButtons = document.querySelectorAll(".rps-button");
const roundResult = document.createElement("p");
container.appendChild(roundResult);

// Global variables
const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// Start game when clicking one of the buttons
choiceButtons.forEach((choice) => {
    choice.addEventListener("click", game);
});

function getComputerChoice() {
    const choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice(event) {
    const choice= event.currentTarget.getAttribute("id");
    return choice;
}

function determineWin(playerChoice, computerChoice) {
    /* Moves are represented by their indexes, rock is equal to 0,
    paper is equal to 1, and scissors is equal to 2. The winner 
    is determined by the formula ((move1 - move2) % 3 + 3) % 3, 
    where 0 means a draw, 1 means move1 wins, and 2 means move2 wins */

    /* Previously the formula used was (move1 - move2) % 3, but due
    to a bug on how the modulo is calculated in javascript, the result
    sometimes was returned as a negative number */

    const playerIndex = OPTIONS.indexOf(playerChoice);
    const computerIndex = OPTIONS.indexOf(computerChoice);
    return ((playerIndex - computerIndex) % 3 + 3) % 3;
}

function playRound(playerChoice, computerChoice) {
    /* Gets result from function determineWin and increment the related
    score, then returns a string expressing the result of the round */
    const result = determineWin(playerChoice, computerChoice);

    if (result === 0) return `Draw! You both picked ${playerChoice}`;
    if (result === 1) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    }
    if (result === 2) {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function game(event) {
    results.textContent = `${playerScore} x ${computerScore}`;
    const playerChoice = getPlayerChoice(event);
    const computerChoice = getComputerChoice();

    roundResult.textContent = playRound(playerChoice, computerChoice);
    if (!roundResult.getAttribute("class")) {
        roundResult.setAttribute("class", "round-result")
    }

    if (playerScore === 5) {
        results.textContent = `Player wins! Final Score: ${playerScore} x ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        results.textContent = `Computer wins! Final Score: ${playerScore} x ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else {
        results.textContent = `${playerScore} x ${computerScore}`;
    }
}