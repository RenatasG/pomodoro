import Challenge from './components/Challenge';
import Header from './components/Header';

export default function App() {
  return (
    <div className="w-screen h-screen p-[0.1rem] bg-primary-500">
      <div className="w-full h-full overflow-y-auto bg-white rounded-t-xl">
        <Header />

        <div className="mt-5">
          <Challenge />
        </div>
      </div>
    </div>
  );
}
