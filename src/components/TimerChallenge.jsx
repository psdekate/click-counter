export default function TimerChallenge({ title, targetTime }) {
  return (
    <div className="challenge">
      <div className="challenge-head">
        <h2>{title}</h2>

        <p>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
      </div>
      <button className="action-button">Start/Stop</button>
      <p>Timer is Running... / Timer Inactive </p>
    </div>
  );
}
