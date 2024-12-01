import "./App.css";
import Button from "./components/Button";
import Spinner from "./components/Spinner";
import Title from "./components/Title";
import { useState } from "react";

function App() {
  const [round, setRound] = useState(1);

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
    </div>
  );
}

export default App;
