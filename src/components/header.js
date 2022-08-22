import logo from '../assets/logo.svg';

export default function Header({ score }) {

  return (
    <header className="flex justify-between items-center border-2 border-hslHeaderOutline rounded-md w-11/12 p-4 my-10">
      <img className="h-16" src={logo} alt="logo" />
      <div className="flex flex-col items-center bg-white rounded-md px-4 py-2">
        <p className="uppercase text-sm font-bold text-hslScoreText">Score</p>
        <p className="text-4xl font-bold text-hslDarkText">{score}</p>
      </div>
    </header>
  );
}