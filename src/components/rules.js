import rules from '../assets/image-rules.svg';
import iconClose from '../assets/icon-close.svg';

const Rules = (props) => (
  <div className="absolute top-0 left-0 min-w-full min-h-full flex flex-col justify-around items-center bg-white">
    <h1 className="uppercase font-bold text-3xl text-hslDarkText">Rules</h1>
    <img src={rules} alt="rules" />
    <img onClick={props.onClose} src={iconClose} alt="close" />
  </div>
);

export default Rules;