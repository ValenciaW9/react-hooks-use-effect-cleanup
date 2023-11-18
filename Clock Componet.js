import React, { useState, useEffect } from "react";
import App from "./App/index.js";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // returning a cleanup function
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <div>{time.toString()}</div>;
}

function ShowClock() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock ? <Clock /> : null}
      <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
    </div>
  );
}

export default ShowClock;