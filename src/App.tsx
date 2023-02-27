import Challenge from './components/Challenge';
import Header from './components/Header';
import Timer from './components/Timer';

export default function App() {
  return (
    <div className="w-screen h-screen p-[0.15rem] bg-blue-600">
      <div className="w-full h-full overflow-y-auto bg-white rounded-xl">
        <Header />

        <main className="mt-5 space-y-5">
          <Challenge />
          <Timer />
        </main>
      </div>
    </div>
  );
}

// add base focus modes
// add custom focus modes
// add timer stop and reset
// add auto start
// add skip to break/long break
// add timer border animation synced with timer
// add fixed music player layout
// implement tasks with local storage
// FAQ section
// show remaining time in website title
