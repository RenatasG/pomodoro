import Challenge from './components/Challenge';
import Header from './components/Header';
import Timer from './components/Timer';

export default function App() {
  return (
    <div className="w-screen h-screen p-[0.15rem] bg-primary-500">
      <div className="w-full h-full overflow-y-auto bg-white rounded-t-xl">
        <Header />

        <main className="mt-5 space-y-5">
          <Challenge />
          <Timer />
        </main>
      </div>
    </div>
  );
}
