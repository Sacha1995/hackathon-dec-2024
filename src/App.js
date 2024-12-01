import "./App.css";
import Button from "./components/Button";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import { useState } from "react";
import Timer from "./components/Timer";
import TextModal from "./components/TextModal";

function App() {
  const [round, setRound] = useState(1);
  const [complete, setComplete] = useState(false);
  const [intro, setIntro] = useState(true);
  const [title, setTitle] = useState(true);

  console.log(complete);

  return (
    <div className="App">
      <Title text="The Best Christmas Game EVER!" />
      <Spinner round={round} />
      <div className="btns">
        {round === 1 && (
          <Button
            text="All the presents have been taken"
            onClick={() => {
              setRound(2);
            }}
          />
        )}
        {round === 2 && (
          <Button
            text="Start over"
            onClick={() => {
              setRound(1);
            }}
          />
        )}
      </div>
      {round === 2 && (
        <div className="timerContainer">
          <Timer round={round} setComplete={setComplete} />
        </div>
      )}
      {complete === true && (
        <TextModal
          text="Time is up!"
          onClose={() => {
            setComplete(false);
          }}
          fontSize={50}
        />
      )}
      {title && intro === true &&
      <TextModal
          title="Welcome to The Best Christmas Game EVER!"
          text="Start the game by everyone bringing ONE present. Then spin the wheel to chance your luck and win presents. Round 1 ends when all the presents have been taken. The aim of the game is to finish Round 2 with as many presents as possible! Good Luck"
          onClose={() => {
            setTitle(false);
            setIntro(false);
          }}
          fontSize={30}
        />
        }
    </div>
  );
}

export default App;
