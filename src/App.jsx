import { useState } from "react";
import "./CounterApp.css"; // Import the CSS file

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-box">
        <h1>Counter App</h1>
        <p>Count: {count}</p>
        <div className="buttons">
          <button onClick={() => setCount(count + 1)} className="increment">
            Increment
          </button>
          <button onClick={() => setCount(count - 1)} className="decrement">
            Decrement
          </button>
          <button onClick={() => setCount(0)} className="reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
