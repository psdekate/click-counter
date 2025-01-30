import "./App.css";
import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <div className="main-container">
      <div className="header-info">
        <div className="welcome-title">
          <h1>The almost final countdown</h1>
          <p>Stop the timer once you eestimate the time is (almost) up</p>
        </div>
        <Player />
      </div>
      <div className="main-content">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Medium"} targetTime={5} />
        <TimerChallenge title={"Hard"} targetTime={10} />
        <TimerChallenge title={"Pro Only"} targetTime={15} />
      </div>
    </div>
  );
}

export default App;
