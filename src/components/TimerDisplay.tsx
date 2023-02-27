import type { Mode } from '../types';

interface Props {
  mode: Mode;
  minutes: number;
  seconds: number;
}

const TimerDisplay = ({ mode, minutes, seconds }: Props) => {
  return (
    <div
      className={
        'flex items-end transition justify-center border-[5px] rounded-full h-96 w-96 cursor-pointer' +
        (mode === 'focus'
          ? ' bg-blue-50 text-blue-600 hover:bg-blue-100/70 border-blue-200/50'
          : ' bg-green-50 text-green-600 hover:bg-green-100/70 border-green-500/20')
      }>
      <div className="flex flex-col items-center h-48 mb-14">
        <div className="text-8xl">
          <span className="tracking-tighter">{format(minutes)}</span>
          <span className="px-1 font-extralight">:</span>
          <span className="tracking-tighter">{format(seconds)}</span>
        </div>
        <span className="mt-10 text-xl">Level</span>
        <span className="text-2xl font-bold">Medium</span>
      </div>
    </div>
  );

  function format(time: number) {
    return time < 10 ? `0${time}` : time;
  }
};

export default TimerDisplay;
