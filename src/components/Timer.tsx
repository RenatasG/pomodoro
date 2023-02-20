import type { PMode } from '../types';
import { useState } from 'react';
import TimerTab from './TimerTab';

const TimerDisplay = () => {
  return <div>08:00</div>;
};

const Timer = () => {
  const [currentMode, setCurrentMode] = useState<PMode>('focus');

  function onTabClick(mode: PMode) {
    setCurrentMode(mode);
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="flex">
        <TimerTab
          name="Pomodoro"
          mode="focus"
          count={0}
          onTabClick={onTabClick}
          isOpen={true}
        />
        <TimerTab
          name="Pomodoro"
          mode="rest"
          count={0}
          onTabClick={onTabClick}
          isOpen={false}
        />
        <TimerTab
          name="Pomodoro"
          mode="long-rest"
          count={0}
          onTabClick={onTabClick}
          isOpen={false}
        />
      </div>

      <div className="mx-10 mt-5">
        <TimerDisplay />
      </div>
    </div>
  );
};

export default Timer;
