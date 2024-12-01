import React from "react";

const ChallengeModal = ({ challenge, onClose }) => {
  return (
    <div className="modal">
      <h2 className="challengeTitle">{challenge.title}</h2>
      <p className="challengeExplanation">{challenge.explanation}</p>
      <button className="btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ChallengeModal;
