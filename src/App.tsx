import { useState } from 'react';
import Challenge from './components/Challenge';
import Header from './components/Header';
import Timer from './components/Timer';

type Levels = 'baby_step' | 'popular' | 'medium' | 'extended';
interface LevelInfo {
  focus: number;
  rest: number;
  long_rest: number;
}

const focusLevels: Record<Levels, LevelInfo> = {
  baby_step: {
    focus: 10,
    rest: 5,
    long_rest: 10,
  },
  popular: {
    focus: 1,
    rest: 5,
    long_rest: 15,
  },
  medium: {
    focus: 40,
    rest: 8,
    long_rest: 20,
  },
  extended: {
    focus: 60,
    rest: 10,
    long_rest: 25,
  },
};

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(focusLevels.popular);

  return (
    <div className="w-screen h-screen p-[0.15rem] bg-blue-600">
      <div className="w-full h-full overflow-y-auto bg-white rounded-xl">
        <Header />

        <main className="mt-5 space-y-5">
          <Challenge />
          <Timer {...currentLevel} />
        </main>
      </div>
    </div>
  );
}

// add base focus modes
// add custom focus mode
// save focus modes to local storage
// add timer stop and reset
// add auto start
// add timer border animation synced with timer
// implement tasks with local storage
// FAQ section
// show remaining time in website title
