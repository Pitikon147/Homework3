import './App.css';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  
  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  const renderPrimeStatus = (number) => {
    if (number <= 1) {
      return 'ไม่เป็นจำนวนเฉพาะ';
    } else if (isPrime(number)) {
      return 'เป็นจำนวนเฉพาะ';
    } else {
      return 'ไม่เป็นจำนวนเฉพาะ';
    }
  };
  const handleIncrease = () => {
    setNum(num + 1);
  };
  const handleDecrease = () => {
    setNum(num - 1);
  };
  return (
    <div className="App">
      <header className='Myheader'>
        <h1>
          React Demo Site
        </h1>
      </header>
      <div className='My-appContent'>
        <h2>{num}</h2>
        <button onClick={handleIncrease}>
          เพิ่ม
        </button>
        <button onClick={handleDecrease}>
          ลด
        </button>
        <br></br>
        <p id='demo'>
          {num} {renderPrimeStatus(num)}
        </p>
      </div>
      <footer className='Myfooter'>
        <div> 
          <span>
            Copyright 2032 @ Pitikon Bubpachart
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
