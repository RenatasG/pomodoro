import type { Mode } from '../types';

interface Props {
  children: string;
  mode: Mode;
  inverted: boolean;
  onClick: () => void;
}

type Theme = {
  [key in Mode]: {
    [key: string]: string;
  };
};

const TimerButton = ({ children, mode, onClick, inverted = false }: Props) => {
  const theme: Theme = {
    focus: {
      false: 'text-white bg-blue-600 hover:bg-blue-700',
      true: 'bg-white text-blue-600 ring-blue-600 ring-1',
    },
    rest: {
      false: 'text-white bg-green-700 hover:bg-green-800',
      true: 'bg-white text-green-600 ring-1 ring-green-700',
    },
    long_rest: {
      false: 'text-white bg-green-700 hover:bg-green-800',
      true: 'bg-white text-green-600 ring-1 ring-green-700',
    },
  };

  return (
    <button
      onClick={onClick}
      className={
        'w-full py-4 mt-6 text-2xl font-bold tracking-widest uppercase transition rounded-full shadow ' +
        theme[mode][inverted.toString()]
      }>
      {children}
    </button>
  );
};

export default TimerButton;
