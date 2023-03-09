import type { Mode, TimerTabType } from '../types';
import { useCallback, useEffect, useState } from 'react';

import TimerTab from './TimerTab';
import TimerDisplay from './TimerDisplay';
import TimerButton from './TimerButton';

type Tabs = {
  [key in Mode]: TimerTabType;
};

type Props = {
  focus: number;
  rest: number;
  long_rest: number;
};

const Timer = (times: Props) => {
  const [currentMode, setCurrentMode] = useState<Mode>('focus');
  const [minLeft, setMinLeft] = useState(times[currentMode]);
  const [secLeft, setSecLeft] = useState(0);
  const [active, setActive] = useState(false);
  const [focused, setFocused] = useState(0);
  const [rested, setRested] = useState(0);
  const [longRested, setLongRested] = useState(0);

  const isOpen = (mode: Mode) => mode === currentMode;
  const onTabClick = (mode: Mode) => setCurrentMode(mode);

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

  const getNextMode = useCallback((): Mode => {
    if (currentMode !== 'focus') return 'focus';
    return rested > 0 && rested % 3 === 0 ? 'long_rest' : 'rest';
  }, [rested, currentMode]);

  const incrementMode = useCallback(() => {
    switch (currentMode) {
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
  }, [focused, rested, longRested, currentMode]);

  useEffect(() => {
    if (active) {
      const interval = setInterval(tick, 100);
      return () => clearInterval(interval);
    }

    function tick() {
      if (secLeft === 0) {
        setMinLeft(minLeft - 1);
        setSecLeft(59);
        return;
      }

      setSecLeft(secLeft - 1);
    }
  }, [active, minLeft, secLeft]);

  useEffect(() => {
    if (minLeft === 0 && secLeft === 0) {
      setActive(false);
      incrementMode();
      const mode = getNextMode();
      setCurrentMode(mode);
      setMinLeft(times[mode]);
      setSecLeft(0);
    }
  }, [minLeft, secLeft, incrementMode, times, getNextMode]);

  useEffect(() => {
    setMinLeft(times[currentMode]);
    setSecLeft(0);
  }, [active, currentMode, times]);

  return (
    <div className="max-w-md mx-auto select-none">
      <div className="flex">
        <TimerTab {...tabs.focus} />
        <TimerTab {...tabs.rest} />
        <TimerTab {...tabs.long_rest} />
      </div>

      <div className="mx-8 mt-5">
        <TimerDisplay mode={currentMode} minutes={minLeft} seconds={secLeft} />

        <TimerButton
          mode={currentMode}
          inverted={active}
          onClick={() => setActive(!active)}>
          {active ? 'Stop' : 'Start'}
        </TimerButton>
      </div>
    </div>
  );
};

export default Timer;
