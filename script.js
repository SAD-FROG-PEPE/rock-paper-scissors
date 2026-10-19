function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let choice = "";
    if (random === 0)
        choice = "rock";
    else if (random === 1)
        choice = "paper"
    else
        choice = "scissors"
    return choice;
}

function getHumanChoice() {
    let input = prompt(
        "Enter rock OR paper OR scissors");
    let choice = input.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        console.log(`EQUAL: computerChoice(${computerChoice}) AND humanChoice(${humanChoice})`);
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log(`HUMAN WIN: humanChoice(${humanChoice}) kills computerChoice(${computerChoice})`);
    }
    else {
        computerScore++;
        console.log(`COMPUTER WIN: computerChoice(${computerChoice}) kills humanChoice(${humanChoice})`);
    }
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
