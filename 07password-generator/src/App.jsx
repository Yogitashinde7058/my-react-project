import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  function generatePassword() {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let newPassword = "";

    for (let i = 0; i < 8; i++) {
      newPassword += characters[
        Math.floor(Math.random() * characters.length)
      ];
    }

    setPassword(newPassword);
  }

  return (
    <div className="container">
      <h1>Password Generator</h1>

      <h2>{password || "Your Password"}</h2>

      <button onClick={generatePassword}>
        Generate Password
      </button>
    </div>
  );
}

export default App;