import { useEffect, useState } from 'react';
import iconPaper from '../assets/icon-paper.svg';
import iconRock from '../assets/icon-rock.svg';
import iconScissors from '../assets/icon-scissors.svg';
import { game, getScore, getHousePicked } from '../ultils/app';

const outcomes = [
  {
    value: "rock",
    image: iconRock
  },
  {
    value: "paper",
    image: iconPaper
  },
  {
    value: "scissors",
    image: iconScissors
  }
];

// Need to add a value, name or id to the button to determine if it is rock, paper or scissors, currently working with props.alt
const Button = (props) => {
  return (
    <button className="bg-white w-24 h-24 md:w-40 md:h-40 flex justify-center items-center rounded-full" disabled={props.isDisabled} onClick={() => props.handleClick(props.alt)}>
      <img className="md:w-24 md:h-24" src={props.src} alt={props.alt} />
    </button>
  );
}

// Screen after player selection is made
// Need to add timeouts and animations 
// Need to remove setItem and setItem2 but Idk how to properly
const Compare = ({ playAgain, gameOutcome, playerSelection, houseSelection }) => {
  const [item, setItem] = useState(outcomes.find(obj => obj.value === playerSelection));
  const [item2, setItem2] = useState(outcomes.find(obj => obj.value === houseSelection));
  
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Prevent component from displaying without the correct button image first
    if (Object.values(outcomes).includes(item.value) && Object.values(outcomes).includes(item2.value)) {
      setIsLoading(false);
    }
  }, [item.value, item2.value]);

  return (
    <>
      {isLoading &&
        <>
          <div className="grid grid-cols-5 gap-4 max-w-md md:max-w-3xl">

            <div className="shadow-[0px_5px_0px_0px_rgba(72,101,244,0.8)] col-start-2 justify-self-center w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslPaperTop to-hslPaperBottom">
              <Button src={item.image} alt={item.value} isDisabled={true} />
            </div>

            <div className="shadow-[0px_5px_0px_0px_rgba(236,158,14,0.8)] col-start-4 justify-self-center w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslScissorsTop to-hslScissorsBottom">
              <Button src={item2.image} alt={item2.value} isDisabled={true} />
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
      }
    </>
  );
}

export default function Game({ setScore }) {
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameOutcome, setGameOutcome] = useState("");
  const [playerSelection, setPlayerSelection] = useState("");
  const [houseSelection, setHouseSelection] = useState("");
  
  const makeSelection = (value) => {
    // Assign player selection
    setPlayerSelection(value);
    // Play game here or somewhere else?
    setGameOutcome(game(value));
    // Get score
    setScore(getScore());
    // Get house picked
    setHouseSelection(getHousePicked());
    // Game is over
    setIsGameOver(true);
  }

  return (
    <>
      {isGameOver
        ? <Compare playAgain={setIsGameOver} gameOutcome={gameOutcome} playerSelection={playerSelection} houseSelection={houseSelection} />
        : <div className="grid grid-cols-5 gap-y-10 max-w-md md:max-w-3xl">
            <div className="col-start-2 justify-self-center w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslPaperTop to-hslPaperBottom shadow-[0px_5px_0px_0px_rgba(72,101,244,0.8)] hover:shadow-none hover:translate-y-1">
              <Button src={iconPaper} alt="paper" handleClick={makeSelection} isDisabled={false} />
            </div>
            <div className="col-start-4 justify-self-center w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslScissorsTop to-hslScissorsBottom shadow-[0px_5px_0px_0px_rgba(236,158,14,0.8)] hover:shadow-none hover:translate-y-1">
              <Button src={iconScissors} alt="scissors" handleClick={makeSelection} isDisabled={false} />
            </div>
            <div className="col-start-3 justify-self-center w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex justify-center items-center rounded-full bg-gradient-to-b from-hslRockTop to-hslRockBottom shadow-[0px_5px_0px_0px_rgba(220,46,78,0.8)] hover:shadow-none hover:translate-y-1">
              <Button src={iconRock} alt="rock" handleClick={makeSelection} isDisabled={false} />
            </div>
          </div>
      }
    </>
  );
}