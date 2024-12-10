import { useState } from 'react'


function App() {
  const [colorText, setColorText] = useState({color: 'rgb (0,0,0)'});

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
  };

  function textColor() {
    setColorText({color: `rgb(${randomNumberInRange(0,255)}, ${randomNumberInRange(0,255)}, ${randomNumberInRange(0,255)}`});
  }


  return (
    <>
      <div>
        <p style={colorText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia impedit sunt? Repellendus, reprehenderit facere.</p>
        <button onClick={textColor}>Set color to Text</button>
      </div>
    </>
  )
}

export default App
