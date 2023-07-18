const OPTIONS = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * 3)];
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