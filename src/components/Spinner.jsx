import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import ChallengeModal from "./ChallengeModal";
import { dataRoundOne, dataRoundTwo, challenges } from "../utils/data";

const Spinner = ({ round }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [showChallengeModal, setShowChallengeModal] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const currentData = round === 1 ? dataRoundOne : dataRoundTwo;
      const newPrizeNumber = Math.floor(Math.random() * currentData.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);

    const currentData = round === 1 ? dataRoundOne : dataRoundTwo;
    const landedOption = currentData[prizeNumber].option;

    if (landedOption === "Challenge") {
      const randomChallenge =
        challenges[Math.floor(Math.random() * challenges.length)];
      setSelectedChallenge(randomChallenge);
      setShowChallengeModal(true); // Show the modal
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
        onStopSpinning={handleStopSpinning}
        outerBorderColor="#3E1F15"
        radiusLineColor="#3E1F15"
        textColors={["#ffffff"]}
      />
      <button className="spin-btn" onClick={handleSpinClick}>
        Spin
      </button>

      {/* Show the challenge modal if one is selected */}
      {showChallengeModal && selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          onClose={() => setShowChallengeModal(false)}
        />
      )}
    </>
  );
};

export default Spinner;
