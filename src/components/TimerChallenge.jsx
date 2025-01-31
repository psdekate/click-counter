import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const activeTimer = remainingTime > 0 && remainingTime < targetTime * 1000;

  function handleReset() {
    setRemainingTime(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 10) {
          clearInterval(timer.current);
          dialog.current.open();
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={remainingTime}
        onReset={handleReset}
      />
      <div className="challenge">
        <div className="challenge-head">
          <h2>{title}</h2>
          <p>
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
        </div>
        <button className="action-button" onClick={activeTimer ? handleStop : handleStart}>
          {activeTimer ? "Stop" : "Start"}
        </button>
        <p>{activeTimer ? "Timer is Running..." : "Timer Inactive"}</p>
      </div>
    </>
  );
}
