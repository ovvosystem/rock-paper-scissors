function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const choice = options[Math.floor(Math.random() * 3)];
    return choice;
}