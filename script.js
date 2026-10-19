function getComputerChoice() {
    let choice = "";
    let random = Math.floor(Math.random() * 3);
    if (random === 0)
        choice = "rock";
    else if (random === 1)
        choice = "paper"
    else
        choice = "scissors"
    return choice;
}

console.log(getComputerChoice());