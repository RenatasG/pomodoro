import type { TimerTabType } from '../types';

const TimerTab = ({ name, count, mode, isOpen, onTabClick }: TimerTabType) => {
  const onClick = () => {
    if (isOpen) return;
    onTabClick(mode);
  };

  return (
    <button
      className={
        'flex justify-center w-full max-w-md py-2 mx-auto text-xl  transition rounded-t-lg' +
        (mode === 'focus'
          ? ' text-primary-500 hover:bg-primary-500/10'
          : ' text-secondary-500 hover:bg-secondary-500/10') +
        (isOpen ? ' cursor-default border-b border-b-black' : '')
      }
      onClick={onClick}>
      {name}
      <span className="ml-2 font-bold">{count}</span>
    </button>
  );
};

export default TimerTab;
