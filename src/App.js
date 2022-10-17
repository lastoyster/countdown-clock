import { useState } from "react";
import "./App.css";
import { Clock } from "./components/Clock";
import { Countdown } from "./components/Countdown";

function App() {
  const [message, setMessage] = useState(null);

  return (
    <>
      <Clock />
      <Countdown event={(e) => setMessage("The countdown has begun :(")} />
      {message && <div className="message">{message}</div>}

      <a
        href="https://github.com/lastoyster/countdown-clock"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa">&#xf09b;</i> Source Code{" "}
      </a>
    </>
  );
}

export default App;
