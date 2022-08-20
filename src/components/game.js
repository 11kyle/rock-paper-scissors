import { useState } from 'react';
import iconPaper from '../assets/icon-paper.svg';
import iconRock from '../assets/icon-rock.svg';
import iconScissors from '../assets/icon-scissors.svg';
import { game, getScore } from '../ultils';

// Need to add a value, name or id to the button to determine if it is rock, paper or scissors, currently working with props.alt
const Button = (props) => {

  // const handleClick = (value) => {
  //   // Play game here or somewhere else?
  //   game(value);
  //   // Game is over
  //   props.handleGame(true);
  // }

  return (
    <button className="bg-white w-24 h-24 flex justify-center items-center rounded-full" disabled={props.isDisabled} onClick={() => props.handleClick(props.alt)}>
      <img src={props.src} alt={props.alt} />
    </button>
  );
}

// Screen after player selection is made
// Need to add timeouts and animations 
const Compare = ({ playAgain, gameOutcome }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-start-2 justify-self-center w-[120px] h-[120px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslPaperTop to-hslPaperBottom">
          <Button src={iconPaper} alt="paper" isDisabled={true} />
        </div>
        <div className="col-start-4 justify-self-center w-[120px] h-[120px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslScissorsTop to-hslScissorsBottom">
          <Button src={iconScissors} alt="scissors" isDisabled={true} />
        </div>
        <div className="col-start-2 text-center">
          <p className="uppercase text-white font-semibold -ml-[100%] -mr-[100%]">You picked</p>
        </div>
        <div className="col-start-4 text-center">
          <p className="uppercase text-white font-semibold -ml-[100%] -mr-[100%]">The house picked</p>
        </div>
      </div>
      <div className="text-center">
        <h1 className="uppercase font-bold text-white text-[56px] my-4">You {gameOutcome}</h1>
        <button className="uppercase font-semibold bg-white text-hslDarkText w-full rounded-md py-2" onClick={() => playAgain(false)}>Play Again</button>
      </div>
    </>
  );
}

// const Result = ({ playAgain }) => {
//   // Replace null with a prop
//   const [isWon, setIsWon] = useState("lose");
//   return (
//     <div className="text-center">
//       <h1 className="uppercase font-bold text-white text-[56px] my-4">You {isWon}</h1>
//       <button className="uppercase font-semibold bg-white text-hslDarkText w-full rounded-md py-2" onClick={() => playAgain(false)}>Play Again</button>
//     </div>
//   );
// }

export default function Game({ setScore }) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOutcome, setGameOutcome] = useState("");
  
  const makeSelection = (value) => {
    // Play game here or somewhere else?
    setGameOutcome(game(value));
    // Get score
    setScore(getScore());
    // Game is over
    setIsGameOver(true);
  }

  return (
    <>
    {isGameOver 
      ? <Compare playAgain={setIsGameOver} gameOutcome={gameOutcome} />
      : <div className="grid grid-cols-5 gap-4 bg-triangle bg-no-repeat bg-top">
          <div className="col-start-2 justify-self-center w-[120px] h-[120px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslPaperTop to-hslPaperBottom">
            <Button src={iconPaper} alt="paper" handleClick={makeSelection} isDisabled={false} />
          </div>
          <div className="col-start-4 justify-self-center w-[120px] h-[120px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslScissorsTop to-hslScissorsBottom">
            <Button src={iconScissors} alt="scissors" handleClick={makeSelection} isDisabled={false} />
          </div>
          <div className="col-start-3 justify-self-center w-[120px] h-[120px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslRockTop to-hslRockBottom">
            <Button src={iconRock} alt="rock" handleClick={makeSelection} isDisabled={false} />
          </div>
        </div>
    }
  </>
  );
}