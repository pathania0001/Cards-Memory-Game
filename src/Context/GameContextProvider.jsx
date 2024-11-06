import React, { useState, useEffect, useRef } from "react";
import GameContext from "./GameContext";

const GameContextProvider = ({ children }) => {
  const [gameType, setGameType] = useState(0);
  const [won, setWon] = useState(0);
  const [lost, setLost] = useState(0);
  const [correctedPairs, setCorrectPairs] = useState(1);
  const [toggle, setToggle] = useState(false); // Ensure initial state is false
  const [profileResultToggle, setprofileResultToggle] = useState(false);
  const [numberArray, setNumberArray] = useState([]);
  const [isWon, setIsWon] = useState(null);
  const isInitialRender = useRef(true);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }
    let newArray = [];
    if (gameType === 0) {
      newArray = [];
    } else if (gameType === 4) {
      newArray = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4];
    } else if (gameType === 6) {
      newArray = [
        1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
        5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6,
      ];
    } else {
      newArray = [
        1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3,
        4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
        7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8,
      ];
    }
    setNumberArray((numberArray) => shuffleArray(newArray));
  }, [gameType]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <GameContext.Provider
      value={{
        won,
        lost,
        setWon,
        setLost,
        isWon,
        setIsWon,
        correctedPairs,
        setCorrectPairs,
        gameType,
        setGameType,
        numberArray,
        toggle,
        setToggle,
        profileResultToggle,
        setprofileResultToggle,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
