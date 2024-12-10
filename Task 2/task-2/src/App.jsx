import { useState } from 'react'


function App() {
  const [randomValue, setRandomValue] = useState(0);

  const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
  };

  const setRandomValueHandler = () => {
    setRandomValue(randomNumberInRange(0, 100));
  }


  return (
    <>
      <div>
        <h2>{randomValue}</h2>
        <button onClick={setRandomValueHandler}>Set new random element</button>
      </div>
    </>
  )
}

export default App
