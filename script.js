function getChoice(number) {
    let choice = "";
    if (number === 0)
        choice = "rock";
    else if (number === 1)
        choice = "paper"
    else
        choice = "scissors"
    return choice;
}

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    return getChoice(random);
}

function getHumanChoice() {
    let input = +prompt(
        "Enter 0 for rock, 1 for paper, 2 for scissors");
    return getChoice(input);
}

let humanScore = 0;
let computerScore = 0;
console.log("getComputerChoice", getComputerChoice());
console.log("getHumanChoice", getHumanChoice());