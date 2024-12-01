import React from "react";
import { Wheel } from "react-custom-roulette";
import { useState } from "react";

const Spinner = () => {
  const dataRoundOne = [
    {
      option: "Take a Present",
      style: { backgroundColor: "green", textColor: "black" },
    },
    {
      option: "Swap you Present",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Steal a Present",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Everyone gives a present to the person on their right",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Take a Present",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Give someone a challenge to win a present",
      style: { backgroundColor: "white", textColor: "black" },
    },
  ];

  const dataRoundTwo = [
    {
      option: "Unwrap a Present",
      style: { backgroundColor: "green", textColor: "black" },
    },
    {
      option: "Swap you Present",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Steal a Present",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Everyone gives a present to the person on their right",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Choose two people to to swap presents",
      style: { backgroundColor: "white", textColor: "black" },
    },
    {
      option: "Give someone a challenge to win a present",
      style: { backgroundColor: "white", textColor: "black" },
    },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * dataRoundOne.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={dataRoundOne}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  );
};

export default Spinner;
