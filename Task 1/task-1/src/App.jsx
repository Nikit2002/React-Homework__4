import { useState } from 'react'


function App() {
  const [array, setArray] = useState([1,2,3,4,5,6]);

  const [randomValue, setRandomValue] = useState(0);

  const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
  };

  const setRandomValueHandler = () => {
    setRandomValue(randomNumberInRange(0, 1000));
  }

  const pushElement = () => {
    setArray([...array, randomValue]);
  };

  return (
    <>
      <div>
        <ul>
          {array.map((el, idx) => (
            <>
              <li key={idx}>{el}</li>
              <br />
            </>
          ))}
        </ul>
        <button onClick={() => { setRandomValueHandler(); pushElement();}}>Push new random element</button>
      </div>
    </>
  )
}

export default App
