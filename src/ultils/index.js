// Used to generate a number from 0 to max
const randomNumber = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

var score = 0;
var gameOutcome = "";

// Game
export function game(playerPicked) {
  // Variables
  const outcomes = ["rock", "paper", "scissors"];
  const housePicked = outcomes[randomNumber(outcomes.length)]; 

  console.log(`player pick ${playerPicked}`);

  function logic(playerPicked, housePicked) {
    if (playerPicked === housePicked) {
      // Tie
      console.log("Tie");
      gameOutcome = "tie";
    } else {
      switch(playerPicked) {
        case "rock":
          if (housePicked === "scissors") {
            // You win
            console.log("You win");
            score++;
            gameOutcome = "win";
          } else {
            // You lose
            console.log("You lose");
            gameOutcome = "lose";
          }
          break;
        case "paper":
          if (housePicked === "rock") {
            // You win
            console.log("You win");
            score++;
            gameOutcome = "win";
          } else {
            // You lose
            console.log("You lose");
            gameOutcome = "lose";
          }
          break;
        case "scissors":
          if (housePicked === "paper") {
            // You win
            console.log("You win");
            score++;
            gameOutcome = "win";
          } else {
            // You lose
            console.log("You lose");
            gameOutcome = "lose";
          }
          break;
        default:
          //
          console.log("something went wrong");
      }
    }
    // This return doesn't need to be here but it doesn't hurt anything. What is the proper way?
    return gameOutcome;
  }

  logic(playerPicked, housePicked);
  
  console.log(score);

  return gameOutcome;
}

export function getScore() {
  return score;
}