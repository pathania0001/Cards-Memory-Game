import React, { useContext } from 'react';
import "../../Card.css";
import GameContext from '../../../Context/GameContext';

function Back({ value }) {
  const { numberArray, gameType } = useContext(GameContext);

  // Determine the font size based on the gameType
  let fontSize;
  if (gameType === 4) {
    fontSize = '160px';
  } else if (gameType === 6) {
    fontSize = '120px';
  } else {
    fontSize = '80px';
  }


  return (
    <div className="text-slate-900 font-bold border-2 border-slate-500 bg-sky-900/30 duration-700 rounded-xl flip-card-back flex justify-center items-center " style={{ fontSize }}>
  {numberArray[value]}
</div>
  );
}

export default Back;
