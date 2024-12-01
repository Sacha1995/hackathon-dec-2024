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
        text="The rules
                      1. Start from the youngest person in the room
            2. One person at a time gets to spin a wheel
            3. What each task means:
                1. Challenge someone, the person can pick who they want to challenge and the person who is challenged will press the challenge button which will give them a task to perform
                2. Take a present from the present stack
                3. Swap your present with someone who already has a present
                4. Presents to the right, give the present to the person to your right side
                5. Steal a present, you can steal a present from someone else
                6. Swap a present with someone who has a present
                7. Two people swap a present, you can choose two people to swap their presents
                8. Unwrap a present, you can open you r present.
            4. When the timer comes to an end swap to the round 2
            5. When all the presents have been shared"
          
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
