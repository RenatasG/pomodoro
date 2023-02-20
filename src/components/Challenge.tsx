const Challenge = () => {
  const handleChallenge = () => {
    console.log('Challenge clicked');
  };

  return (
    <div className="flex flex-col items-center mx-1">
      <button
        onClick={handleChallenge}
        className="px-3 py-2 rounded-3xl hover:bg-primary-500/10 hover:text-primary-500">
        <span className="text-xl font-extrabold">
          Why don&apos;t you take a challenge?
          <span className="ml-2 text-2xl">🐣</span>
        </span>
      </button>
    </div>
  );
};

export default Challenge;
