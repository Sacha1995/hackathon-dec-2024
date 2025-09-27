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
  const [rules, setRules] = useState(false);
  const [intro, setIntro] = useState(true);
  const [title, setTitle] = useState(true);

  return (
    <div className="App">
      <Title text="The Best Christmas Game EVER!" />
      <Spinner round={round} />

      <div className="ruleBtn">
        <Button
          text="Rules"
          onClick={() => {
            setRules(true)
          }}
        />
      </div>
   
      {rules === true && <TextModal
            title="The Rules"
            text={
           <div>
        <ul className="unorderedList">
          <li>- Start from the youngest person in the room</li>
          <li>- One person at a time gets to spin a wheel</li>
          <li>
            What each task means:
            <ol>
              <li>Challenge someone: pick who you want to challenge. The challenged person presses the challenge button and gets a task.</li>
              <li>Take a present from the present stack.</li>
              <li>Swap your present with someone who already has a present.</li>
              <li>Presents to the right: give your present to the person on your right.</li>
              <li>Steal a present: you can steal a present from someone else.</li>
              <li>Swap a present with someone who has a present.</li>
              <li>Two people swap a present: choose two people to swap their presents.</li>
              <li>Unwrap a present: you can open your present.</li>
            </ol>
          </li>
          <li>- When the timer comes to an end, swap to round 2.</li>
          <li>- When all the presents have been shared.</li>
        </ul>
      </div>
            }

        onClose={() => {
          setRules(false);
        }}
        fontSize={25}
      />
      }
     
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
