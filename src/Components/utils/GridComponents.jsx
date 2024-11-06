import React, { useContext, useRef} from 'react';
import "../Card.css";
import Front from './GameGrid/Front';
import Back from './GameGrid/Back';
import GameContext from '../../Context/GameContext';

function GridComponents({ id, value,handleCardOnClick}) {
  const flipRef = useRef(id);
  const flipRefParent = useRef("parent"+id);

  function flipHandle() {
            flipRef.current.classList.add("rotation-clockwise");  
            handleCardOnClick({flipRef,value,flipRefParent})
           
     };

  return (
    <div className='flip-card rounded-xl'
    ref={flipRefParent}
    onClick={flipHandle}
    >
      <div 
        className='flip-card-inner rounded-xl'
        ref={flipRef}
         id={id}
         
      >
        <Front/>
        <Back value={value} />
      </div>
    </div>
  );
}

export default GridComponents;
