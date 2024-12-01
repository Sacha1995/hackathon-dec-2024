import React from "react";
import { Wheel } from "react-custom-roulette";
import { useState } from "react";

const Spinner = ({ round }) => {
  const dataRoundOne = [
    {
      option: "Take a Present",
      style: { backgroundColor: "#7E241F" },
    },
    {
      option: "Swap you Present",
      style: { backgroundColor: "#5F8356" },
    },
    {
      option: "Steal a Present",
      style: { backgroundColor: "#7E241F" },
    },
    {
      option: "Presents to the right",
      style: { backgroundColor: "#5F8356" },
    },
    {
      option: "Take a Present",
      style: { backgroundColor: "#7E241F" },
    },
    {
      option: "Challenge someone",
      style: { backgroundColor: "#5F8356" },
    },
  ];

  const dataRoundTwo = [
    {
      option: "Unwrap a Present",
      style: { backgroundColor: "#7E241F" },
    },
    {
      option: "Swap you Present",
      style: { backgroundColor: "#608258" },
    },
    {
      option: "Steal a Present",
      style: { backgroundColor: "#7E241F" },
    },
    {
      option: "Presents to the right",
      style: { backgroundColor: "#608258" },
    },
    {
      option: "Two people swap",
      style: { backgroundColor: "#7E241F" },
    },
    {
      option: "Challenge someone",
      style: { backgroundColor: "#608258" },
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
        className="spinner"
        fontSize={16}
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={round === 1 ? dataRoundOne : dataRoundTwo}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
        outerBorderColor="#3E1F15"
        radiusLineColor="#3E1F15"
        textColors={["#ffffff"]}
      />
      <button className="spin-btn" onClick={handleSpinClick}>
        Spin
      </button>
    </>
  );
};

export default Spinner;
