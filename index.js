const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
let result = document.getElementById('result');
const playerScore = document.getElementById('playerScore');
const computerScore = document.getElementById('computerScore');
let playerScoreCount = 0;
let computerScoreCount = 0;

const choices = ['rock', 'paper', 'scissors'];
// game logic
function game(choice){
    //main logic
    const compSelect = choices[Math.floor(Math.random() * choices.length)]; 
    let gameResult = '';
    if(choice === compSelect){
        gameResult = "It's a tie!";
    }
    else if(choice === 'rock' && compSelect === 'scissors' || choice === 'paper' && compSelect === 'rock' || choice === 'scissors' && compSelect === 'paper'){
        gameResult = "You win!";
    }
    else{
        gameResult = "You lose!";
    }

    //displaying result
    computerChoice.textContent = `Computer's choice: ${compSelect}`;
    playerChoice.textContent = `Player's choice: ${choice}`;
    result.textContent = gameResult;

    //for debugging
    console.log(playerChoice, compSelect);

    //coloring and scoring the result
    result.classList.remove("winner", "loser", "tie");
    switch(gameResult){
        case "You win!":
            result.classList.add("winner");
            playerScoreCount++;
            playerScore.textContent = playerScoreCount;
            break;
        case "You lose!":
            result.classList.add("loser");
            computerScoreCount++;
            computerScore.textContent = computerScoreCount
            break;
        case "It's a tie!":
            result.classList.add("tie");
    }
}