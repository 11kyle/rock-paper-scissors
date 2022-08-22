import { useState } from "react";
import Game from "./components/game";
import Header from "./components/header";
import Rules from "./components/rules";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  // space-around or space-between
  return (
    <div className="flex flex-col justify-between items-center w-screen min-h-screen bg-gradient-to-b from-hslBackgroundTop to-hslBackgroundBottom">
      <Header score={score} />
      <Game setScore={setScore} />
      <button className="md:self-end border-2 border-white rounded-md uppercase text-white hover:text-hslRockBottom hover:border-hslRockBottom px-9 py-2 md:mr-8 lg:mr-12 xl:mr-16 2xl:mr-20 mt-10 mb-20" onClick={handleOpen}>Rules</button>
      {isVisible && <Rules onClose={handleClose} />}
    </div>
  );
}

export default App;