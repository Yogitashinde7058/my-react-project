import { useState } from "react";
import "./App.css";

function App() {
  const [color,setColor] = useState("white");

  return(
    <div style={{backgroundColor:color}}>
      <h1>Color Changer</h1>

      <button className="color-btn" onClick={() => setColor("lightblue")}>
        Change Color</button> 

      <button className="color-btn" onClick={() => setColor("lightgreen")}>
        Green</button>

      <button className="color-btn" onClick={() => setColor("lightPink")}>
        Pink</button>

      <button className="color-btn" onClick={() => setColor("white")}>
        Reset</button>
    </div>
  )
}

export default App;