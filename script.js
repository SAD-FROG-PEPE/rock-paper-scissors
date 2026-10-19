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

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log("ROUND " + (i + 1));
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore === computerScore)
        console.log(`YOU ARE EQUAL: ${humanScore} AGAINST ${computerScore}`);
    else if (humanScore > computerScore)
        console.log(`HUMAN WIN THE GAME WITH SCORE ${humanScore} AGAINST ${computerScore}`);
    else
        console.log(`COMPUTER WIN THE GAME WITH SCORE ${computerScore} AGAINST ${humanScore}`);
}

let humanScore = 0;
let computerScore = 0;
playGame();
