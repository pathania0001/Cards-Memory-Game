import React, { useRef, useState, useEffect, useContext } from 'react';
import Front from '../../Profile-items/F/Front';
import "../../Card.css";
import Back from '../../Profile-items/F/Back';
import GameContext from '../../../Context/GameContext';

function F() {

  const flipRef = useRef("F-profile");
  const {profileResultToggle, setprofileResultToggle} = useContext(GameContext)
  useEffect(() => {
    if (profileResultToggle) {
      flipRef.current.classList.add("rotation-clockwise");
    } else {
      flipRef.current.classList.remove("rotation-clockwise");
    }
  }, [profileResultToggle]);

  function flipHandle() {
    return()=>{
      setprofileResultToggle(profileResultToggle => !profileResultToggle);
    }
  }

  return (
    <div className='flip-card rounded-xl'
    onClick={flipHandle()}
    >
      <div 
        className='flip-card-inner duration-500 rounded-xl'
        ref={flipRef}
      >
        <Front />
        <Back  />
      </div>
    </div>
  );
}

export default F;
