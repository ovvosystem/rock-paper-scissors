const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = OPTIONS[Math.floor(Math.random() * 3)];
    return choice;
}

function getPlayerChoice(choice) {
    choice = choice.toLowerCase();
    if (choice in OPTIONS) {
        return choice;
    } else {
        return "";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log(`Draw! You both picked ${playerSelection}`);
    } else if 
}