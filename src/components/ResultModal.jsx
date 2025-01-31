import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-dialog">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <div className="result-info">
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped the timer with <strong>{formattedTime} seconds left</strong>
        </p>
      </div>
      <form method="dialog" onSubmit={onReset}>
        <button className="modal-button">Close</button>
      </form>
    </dialog>,
    document.querySelector("body")
  );
});

export default ResultModal;
