import { useState, useEffect } from 'react';

function HomePage() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setGameActive(false);
    }
  }, [gameActive, timeLeft]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setGameActive(true);
  };

  const handleBoxClick = () => {
    if (gameActive) {
      setScore(score + 1);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: '"Brush Script MT", cursive', color: '#4b9be1' }}>
        {"Lemon78717's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'Arial, Helvetica, cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: '"Times New Roman", Times, serif',
          padding: '1rem',
          fontSize: '2rem',
          background: 'purple',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          const name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>

      {/* Game Section */}
      <div
        style={{
          marginTop: '5rem',
          textAlign: 'center'
        }}
      >
        <h2>Click the Box Game</h2>
        <p>Time Left: {timeLeft} seconds</p>
        <p>Score: {score}</p>
        {!gameActive && (
          <button
            style={{
              fontFamily: 'monospace',
              padding: '1rem',
              fontSize: '2rem',
              background: 'green',
              color: 'white'
            }}
            onClick={startGame}
          >
            Start Game
          </button>
        )}
        {gameActive && (
          <div
            style={{
              width: '100px',
              height: '100px',
              background: 'red',
              margin: '2rem auto',
              cursor: 'pointer'
            }}
            onClick={handleBoxClick}
          ></div>
        )}
      </div>
    </div>
  );
}

export default HomePage;

