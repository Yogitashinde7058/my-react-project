import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-card">
      <h1>Counter App</h1>
      <h2 className="count">{count}</h2>
      <p>Current Count: {count}</p>

      <div className="buttons">
      <button className="increase" onClick={() => setCount(count+1)}>
          Increase +</button>

      <button className="decrease" onClick={() => setCount(count-1)}>
        Decrease -</button>
    
      <button className="reset" onClick={() => setCount(0)}> 
        Reset</button>
    
      </div>
      </div>
    </div>
  )
}

export default App;