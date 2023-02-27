import type { TimerTabType } from '../types';

const TimerTab = ({
  name,
  count,
  mode,
  isOpen,
  onTabClick,
  isDisabled,
}: TimerTabType) => {
  const onClick = () => {
    if (isOpen || isDisabled) return;
    onTabClick(mode);
  };

  return (
    <button
      className={
        'flex justify-center w-full max-w-md py-2 mx-auto text-xl transition-[background-color] rounded-t-lg duration-300' +
        (mode === 'focus'
          ? ' text-blue-600 hover:bg-blue-500/10'
          : ' text-green-700 hover:bg-green-500/10') +
        (isOpen ? ' cursor-default border-b border-b-black' : '') +
        (isDisabled ? ' cursor-not-allowed opacity-50' : '')
      }
      onClick={onClick}>
      {name}
      <span className="ml-2 font-bold">{count}</span>
    </button>
  );
};

export default TimerTab;
