import { useEffect, useState } from 'react';
import type { Mode } from '../types';

import TimerButton from './TimerButton';

interface Props {
  mode: Mode;
  minutes: number;
}

const TimerDisplay = ({ mode, minutes }: Props) => {
  const [active, setActive] = useState(false);
  const [minLeft, setMinLeft] = useState(minutes);
  const [secLeft, setSecLeft] = useState(0);

  useEffect(() => {
    if (active) {
      const interval = setInterval(tick, 1000);
      // TODO figure out this return
      return () => clearInterval(interval);
    }

    function tick() {
      if (minLeft === 0 && secLeft === 0) {
        // TODO switch to rest mode
        return;
      }
      if (secLeft === 0) {
        setMinLeft(minLeft - 1);
        setSecLeft(59);
        return;
      }
      setSecLeft(secLeft - 1);
    }
    // TODO why do i need minLeft and secLeft here if this only runs when `active` changes
    // TODO why does it work without providing a dependency array
  }, [active, minLeft, secLeft]);

  useEffect(() => {
    setMinLeft(minutes);
    setSecLeft(0);
  }, [minutes]);

  return (
    <>
      <div
        className={
          'flex items-end transition justify-center border-[5px] rounded-full h-96 w-96 cursor-pointer' +
          (mode === 'focus'
            ? ' bg-blue-50 text-blue-600 hover:bg-blue-100/70 border-blue-200/50'
            : ' bg-green-50 text-green-600 hover:bg-green-100/70 border-green-500/20')
        }>
        <div className="flex flex-col items-center h-48 mb-14">
          <div className="text-8xl">
            <span className="tracking-tighter">{format(minLeft)}</span>
            <span className="px-1 font-extralight">:</span>
            <span className="tracking-tighter">{format(secLeft)}</span>
          </div>
          <span className="mt-10 text-xl">Level</span>
          <span className="text-2xl font-bold">Medium</span>
        </div>
      </div>

      <TimerButton mode={mode} inverted={active} onClick={toggleTimer}>
        {active ? 'Stop' : 'Start'}
      </TimerButton>
    </>
  );

  function toggleTimer() {
    setActive(!active);
    setMinLeft(minutes);
    setSecLeft(0);
  }

  function format(time: number) {
    return time < 10 ? `0${time}` : time;
  }
};

export default TimerDisplay;
