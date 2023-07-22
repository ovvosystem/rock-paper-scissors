const OPTIONS = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelectorAll(".rps-button");
choiceButtons.forEach((choice) => {
    choice.addEventListener("click", getPlayerChoice);
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

function game() {
    // Plays five rounds of Rock, Paper, Scissors
    let playerChoice, computerChoice;
    let round = 1;
    while (round <= 5) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice(prompt("Pick rock, paper or scissors"));
        if (playerChoice) {
            console.log(playRound(playerChoice, computerChoice));
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