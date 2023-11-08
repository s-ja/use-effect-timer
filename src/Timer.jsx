import React, { useState, useEffect } from "react";
function Timer() {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;
    console.log("ticking");
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (isActive && seconds === 0) {
      clearInterval(interval);
      alert("Time is up!");
      setIsActive(false);
      setSeconds(10);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleStartClick = () => {
    setIsActive(!isActive);
  };

  const handleResetClick = () => {
    setIsActive(false);
    setSeconds(10);
  };

  return (
    <div>
      <p>남은 시간을 표시하세요 : : {seconds} 초</p>
      <button onClick={handleStartClick}>{isActive ? "Stop" : "Start"}</button>
      <button onClick={handleResetClick}>리셋</button>
    </div>
  );
}

export default Timer;
