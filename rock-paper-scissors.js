const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice(choice) {
    /* Checks if the player's input is a valid choice
    If it is, returns a standardized version of the choice
    Otherwise, returns an empty string */
    choice = choice.toLowerCase();
    if (OPTIONS.includes(choice)) {
        return choice;
    } else {
        return "";
    }
}

function determineWin(playerSelection, computerSelection) {
    /* Moves are represented by their indexes, rock is equal to 0,
    paper is equal to 1, and scissors is equal to 2. The winner 
    is determined by the formula ((move1 - move2) % 3 + 3) % 3, 
    where 0 means a draw, 1 means move1 wins, and 2 means move2 wins */

    /* Previously the formula used was (move1 - move2) % 3, but due
    to a bug on how the modulo is calculated in javascript, the result
    sometimes was returned as a negative number */

    const playerIndex = OPTIONS.indexOf(playerSelection);
    const computerIndex = OPTIONS.indexOf(computerSelection);
    return ((playerIndex - computerIndex) % 3 + 3) % 3;
}

function playRound(playerSelection, computerSelection) {
    /* Gets result from function determineWin and increment the related
    score, then returns a string expressing the result of the round */
    const result = determineWin(playerSelection, computerSelection);

    if (result === 0) return `Draw! You both picked ${playerSelection}`;
    if (result === 1) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
    if (result === 2) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    // Plays five rounds of Rock, Paper, Scissors
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