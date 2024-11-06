import React, { useContext, useState } from 'react';
import "../../Card.css";
import GameContext from '../../../Context/GameContext';

function Back({flipHandle}) {
  const [game, setGame] = useState(0);
  const { setGameType,setToggle,toggle } = useContext(GameContext);


  // function onClickHandle(type){
  //     return ()=>{
  //       setGameType(type)
  //       setToggle(!toggle)
  //     };
  // }

  // const onClickHandle = (type) => {
  //   setGameType(type);
  //   setToggle(!toggle);
  // };
  
      
      // or by arrow funtion  ----this runs automatticaly on button mounted not on click 
      // const onClickHandle = (type) => {
      //   setGameType(type);
      //   setToggle(!toggle);
      // };



      //or by arrow funtion  ----this runs on click 
      const onClickHandle = (type) => ()=>{
        setGameType(type);
        setToggle(!toggle);
      };

      
      // const onClickHandle = (type) => {
      //   return () => {
      //     setGameType(type);
      //     setToggle(!toggle);
      //   };
      // };
      

  return (
    <div className='border-2 border-slate-500 bg-cyan-500/50 duration-700 rounded-xl flip-card-back'
    
    onClick={()=>{
      return flipHandle()
    }}
>
      <div className='col_center w-full h-full'>
        <button
          className='text-2xl font-bold text-center bg:red text-gray-600 antialiased'
          onClick={onClickHandle(4)}
        >
          CASUAL
        </button>
        <button
          className='text-2xl font-bold text-center text-gray-600 antialiased'
          onClick={onClickHandle(6)}
        >
          MEDIUM
        </button>
        <button
          className='text-2xl font-bold text-center text-gray-600 antialiased'
          onClick={onClickHandle(8)}
        >
          HARD
        </button>
      </div>
    </div>
  );
}

export default Back;
