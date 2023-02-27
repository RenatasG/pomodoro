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
  const [focusTime, setFocusTime] = useState(25);
  const [active, setActive] = useState(false);
  const [minLeft, setMinLeft] = useState(focusTime);
  const [secLeft, setSecLeft] = useState(0);

  const tabs: Tabs = {
    focus: {
      name: 'Pomodoro',
      count: 0,
      mode: 'focus',
      isOpen: isOpen('focus'),
      isDisabled: active && currentMode !== 'focus',
      onTabClick,
    },
    rest: {
      name: 'Rest',
      count: 0,
      mode: 'rest',
      isOpen: isOpen('rest'),
      isDisabled: active && currentMode !== 'rest',
      onTabClick,
    },
    long_rest: {
      name: 'Long Rest',
      count: 0,
      mode: 'long_rest',
      isOpen: isOpen('long_rest'),
      isDisabled: active && currentMode !== 'long_rest',
      onTabClick,
    },
  };

  useEffect(() => {
    if (active) {
      const interval = setInterval(tick, 1000);
      // TODO
      return () => clearInterval(interval);
    }

    // TODO can this go outside of useEffect?
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
    setFocusTime(mode === 'focus' ? 25 : 5);
  }

  function isOpen(mode: Mode) {
    return mode === currentMode;
  }

  function toggleTimer() {
    setActive(!active);
    setMinLeft(focusTime);
    setSecLeft(0);
  }

  // only gets called when the timer is done
  // onTabClick will be called to switch to the next mode
  //   function onModeEnd() {}
};

export default Timer;
