import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ round, setComplete }) => {
  return (
    <CountdownCircleTimer
      isPlaying={round === 2}
      duration={6}
      colors={["#5F8356", "#493C27", "#8F533F", "#7E241F"]}
      colorsTime={[600, 400, 200, 0]}
      onComplete={() => {
        setComplete(true);
      }}
      className="timer"
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
};

export default Timer;
