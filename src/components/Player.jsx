import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const newPlayerName = useRef();

  function setName() {
    setPlayerName(newPlayerName.current.value);
    newPlayerName.current.value = "";
  }

  return (
    <div className="player-info">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <div className="input-action">
        <input ref={newPlayerName} type="text" placeholder="Enter your name..." />
        <button onClick={setName}>Set Name</button>
      </div>
    </div>
  );
}
