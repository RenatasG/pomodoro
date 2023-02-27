import type { Mode } from '../types';

interface Props {
  children: string;
  mode: Mode;
  inverted: boolean;
  onClick: () => void;
}

type Theme = {
  [key in Mode]: {
    [key: number]: string;
  };
};

const TimerButton = ({ children, mode, onClick, inverted = false }: Props) => {
  const theme: Theme = {
    focus: {
      0: 'text-white bg-blue-600 hover:bg-blue-700',
      1: 'bg-white text-blue-600 ring-blue-600 ring-1',
    },
    rest: {
      0: 'text-white bg-green-700 hover:bg-green-800',
      1: 'bg-white text-green-600 ring-1 ring-green-700',
    },
    long_rest: {
      0: 'text-white bg-green-700 hover:bg-green-800',
      1: 'bg-white text-green-600 ring-1 ring-green-700',
    },
  };

  return (
    <button
      onClick={onClick}
      className={
        'w-full py-4 mt-6 text-2xl font-bold tracking-widest uppercase transition rounded-full shadow ' +
        theme[mode][+inverted]
      }>
      {children}
    </button>
  );
};

export default TimerButton;
