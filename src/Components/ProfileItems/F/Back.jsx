import React, { useContext, useEffect } from 'react'
import   "../../Card.css"
import GameContext from '../../../Context/GameContext';
function Back() {
  const 
  { 
    won,
    lost,
    isWon 
  } = useContext(GameContext);
  
  const messageResult = function() {
    if(won===0 && lost===0)
      return "";
    else if(isWon)
      return "You Won!";
    else
      return "You Lost!";
  }
  return (
    <div 
    className='border-2  border-slate-500 bg-teal-600 hover: rounded-xl flex-col text-white flip-card-back'
    >
                <h1 className='text-3xl font-bold  text-red-900  flex  justify-center self-center mt-5'>Result</h1>
                <h2 className='flex justify-center mt-5 font-bold text-3xl text-slate-900'>{messageResult()}</h2>
              <h1 className='flex ordinal items-center justify-center text-2xl mt-11'>
                <span className='mx-2 text-slate-900 font-bold '>Figures: </span>
                <span className='mx-2 text-green-950 font-bold'>Won-{won}</span>
                <span className='mx-2 text-red-800 font-bold'>Lost-{lost}</span>
               </h1>
              </div>
  )
}

export default Back