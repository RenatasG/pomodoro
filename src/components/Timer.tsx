import type { Mode, TimerTabType } from '../types';
import { useState } from 'react';

import TimerTab from './TimerTab';
import TimerDisplay from './TimerDisplay';

type Tabs = {
  [key in Mode]: TimerTabType;
};

const Timer = () => {
  const [currentMode, setCurrentMode] = useState<Mode>('focus');

  const tabs: Tabs = {
    focus: {
      name: 'Pomodoro',
      count: 0,
      time: 25,
      mode: 'focus',
      isOpen: isOpen('focus'),
      onTabClick,
    },
    rest: {
      name: 'Rest',
      count: 0,
      time: 5,
      mode: 'rest',
      isOpen: isOpen('rest'),
      onTabClick,
    },
    long_rest: {
      name: 'Long Rest',
      count: 0,
      time: 15,
      mode: 'long_rest',
      isOpen: isOpen('long_rest'),
      onTabClick,
    },
  };

  return (
    <div className="max-w-md mx-auto select-none">
      <div className="flex">
        <TimerTab {...tabs.focus} />
        <TimerTab {...tabs.rest} />
        <TimerTab {...tabs.long_rest} />
      </div>

      <div className="mx-8 mt-5">
        <TimerDisplay minutes={tabs[currentMode].time} mode={currentMode} />
      </div>
    </div>
  );

  function onTabClick(mode: Mode) {
    setCurrentMode(mode);
  }

  function isOpen(mode: Mode) {
    return mode === currentMode;
  }
};

export default Timer;
