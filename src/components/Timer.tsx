import type { Mode, TimerTabType } from '../types';
import { useEffect, useState } from 'react';

import TimerTab from './TimerTab';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';

type Tabs = {
  [key in Mode]: TimerTabType;
};

const Timer = () => {
  const [currentMode, setCurrentMode] = useState<Mode>('focus');
  const [pomoTime, setPomoTime] = useState(25);
  const [active, setActive] = useState(false);
  const [minLeft, setMinLeft] = useState(pomoTime);
  const [secLeft, setSecLeft] = useState(0);
  const [focused, setFocused] = useState(0);
  const [rested, setRested] = useState(0);
  const [longRested, setLongRested] = useState(0);

  const tabs: Tabs = {
    focus: {
      name: 'Pomodoro',
      count: focused,
      mode: 'focus',
      isOpen: isOpen('focus'),
      isDisabled: active && currentMode !== 'focus',
      onTabClick,
    },
    rest: {
      name: 'Rest',
      count: rested,
      mode: 'rest',
      isOpen: isOpen('rest'),
      isDisabled: active && currentMode !== 'rest',
      onTabClick,
    },
    long_rest: {
      name: 'Long Rest',
      count: longRested,
      mode: 'long_rest',
      isOpen: isOpen('long_rest'),
      isDisabled: active && currentMode !== 'long_rest',
      onTabClick,
    },
  };

  useEffect(() => {
    if (active) {
      const interval = setInterval(tick, 1000);
      return () => clearInterval(interval);
    }

    function tick() {
      if (secLeft > 0) {
        setSecLeft(secLeft - 1);
        return;
      }

      if (minLeft === 0 && secLeft === 0) {
        setActive(false);
        switchModes();
        return;
      }

      setMinLeft(minLeft - 1);
      setSecLeft(59);
    }

    // TODO why do i need minLeft and secLeft here if this only runs when `active` changes
    // TODO why does it work without providing a dependency array
  });

  return (
    <div className="max-w-md mx-auto select-none">
      <div className="flex">
        <TimerTab {...tabs.focus} />
        <TimerTab {...tabs.rest} />
        <TimerTab {...tabs.long_rest} />
      </div>

      <div className="mx-8 mt-5">
        <TimerDisplay mode={currentMode} minutes={minLeft} seconds={secLeft} />

        <TimerButton mode={currentMode} inverted={active} onClick={toggleTimer}>
          {active ? 'Stop' : 'Start'}
        </TimerButton>
      </div>
    </div>
  );

  function onTabClick(mode: Mode) {
    setCurrentMode(mode);
    // TODO
    setPomoTime(mode === 'focus' ? 25 : 5);
  }

  function isOpen(mode: Mode) {
    return mode === currentMode;
  }

  function toggleTimer() {
    setActive(!active);
    setMinLeft(pomoTime);
    setSecLeft(0);
  }

  function switchModes() {
    incrementMode(currentMode);
    setPomoTime(5);

    if (currentMode !== 'focus') {
      setCurrentMode('focus');
      return;
    }

    if (rested > 0 && rested % 3 === 0) {
      setCurrentMode('long_rest');
      return;
    }

    setCurrentMode('rest');
  }

  function incrementMode(mode: Mode) {
    switch (mode) {
      case 'focus':
        setFocused(focused + 1);
        break;
      case 'rest':
        setRested(rested + 1);
        break;
      case 'long_rest':
        setLongRested(longRested + 1);
        break;
    }
  }
};

export default Timer;
