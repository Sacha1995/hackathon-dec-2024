import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "./Button";

const ChallengeModal = ({ challenge, onClose }) => {
  const { title, explanation, timer, time, showVideo, videosId } = challenge;
  const [isTimerPlaying, setIsTimerPlaying] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState("");

  useEffect(() => {
    if (showVideo && videosId && videosId.length > 0) {
      const randomVideo = videosId[Math.floor(Math.random() * videosId.length)];
      setActiveVideoId(randomVideo);
    }
  }, [showVideo, videosId]);

  const handleStartTimer = () => {
    setIsTimerPlaying(true);
  };

  const handleComplete = () => {
    alert("Time is up!");
  };

  return (
    <div className="modal">
      <h2 className="challengeTitle">{title}</h2>
      <p className="challengeExplanation">{explanation}</p>
      {timer && (
        <div className="timer-container">
          {!isTimerPlaying && (
            <Button
              className="btnTimer"
              text="Start Timer"
              onClick={handleStartTimer}
            />
          )}
          {isTimerPlaying && (
            <div className="challengeTimer">
              <CountdownCircleTimer
                isPlaying={isTimerPlaying}
                duration={time}
                colors={["#5F8356", "#493C27", "#8F533F", "#7E241F"]}
                colorsTime={[time, time / 2, time / 4, 0]}
                onComplete={handleComplete}
              >
                {({ remainingTime }) => <span>{remainingTime} seconds</span>}
              </CountdownCircleTimer>
            </div>
          )}
        </div>
      )}
      {showVideo === true && (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${activeVideoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
      <button className="btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default ChallengeModal;
