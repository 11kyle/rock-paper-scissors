import rules from '../assets/image-rules.svg';
import iconClose from '../assets/icon-close.svg';

const Rules = (props) => (
  <div className="absolute top-0 left-0 w-screen min-h-screen flex flex-col justify-around items-center md:flex-row md:flex-wrap md:drop-shadow-lg bg-white px-10 md:top-1/2 md:-mt-[256px] md:left-auto md:min-h-0 md:w-96 md:rounded-md">
    <h1 className="uppercase font-bold text-3xl text-hslDarkText my-20 md:my-8 md:order-1 md:w-11/12">Rules</h1>
    <img className="my-20 md:mt-0 md:mb-8 md:order-3 md:w-full" src={rules} alt="rules" />
    <button className="my-20 md:my-8 md:order-2" onClick={props.onClose}>
      <img src={iconClose} alt="close" />
    </button>
  </div>
);

export default Rules;