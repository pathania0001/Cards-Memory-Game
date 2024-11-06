
import React, { useContext, useRef, useState, useEffect } from 'react';
import GameContext from '../Context/GameContext';
import GridComponents from './utils/GridComponents';
import "./Card.css";

function Playgame() {
  const { 
    gameType,
    numberArray,
    setWon,
    setLost,
    won,
    lost,
    isWon,
    setIsWon,
    correctedPairs,
    setCorrectPairs,
    toggle,
    setToggle,
    profileResultToggle, 
    setprofileResultToggle 
  } = useContext(GameContext);

  let firstCard = useRef(false);
  let secondCard = useRef(false);
  let isInitialRendered = useRef(false);


  const Arrays = new Array(gameType * gameType);
  for (let i = 0; i < Arrays.length; i++) {
    Arrays[i] = {
      id: `grid-${i}`,
      number: i 
    };
  }



   useEffect(() => {
    let timeLimit = gameType * 10;
    const interval = setInterval(() => {
      if (timeLimit > 0) {
        timeLimit--;
      } else {
        clearInterval(interval);
        setLost((lost) => {
          setCorrectPairs((correctedPairs) => (1))
          setIsWon((isWon) =>(false))
          return lost + 1});
        !profileResultToggle&&setprofileResultToggle((profileResultToggle)=>(!profileResultToggle)) 
        setToggle((toggle) => !toggle);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [gameType, setLost, setToggle]);



  function handleCardOnClick(props) {
    if (isInitialRendered.current === false) {
      isInitialRendered.current = true;
      setCorrectPairs(1);
    }
    if (firstCard.current === false) {
      firstCard = {
        ref: props.flipRef,
        value: props.value,
        parent: props.flipRefParent
      };
      firstCard.parent.current.classList.add("unclickable");
    } else if (secondCard.current === false) {
      secondCard = {
        ref: props.flipRef,
        value: props.value,
        parent: props.flipRefParent
      };
      firstCard.parent.current.classList.remove("unclickable");
      secondCard.ref.current.classList.add('rotation-clockwise');
      if (numberArray[firstCard.value] === numberArray[secondCard.value]) {
        firstCard.ref.current.classList.add('visibility');
        firstCard.parent.current.classList.add("unclickable");
        secondCard.ref.current.classList.add('visibility');
        secondCard.parent.current.classList.add("unclickable");
        firstCard.current = false;
          secondCard.current = false;
        if (correctedPairs === (gameType * (gameType / 2))) {
          setWon((won) => {
            setCorrectPairs((correctedPairs) => (1))
            setIsWon((isWon) =>(true))
            return won + 1});
          (!profileResultToggle)&&setprofileResultToggle((profileResultToggle)=>(!profileResultToggle)) 
          setToggle((toggle) => !toggle);
        }
        setCorrectPairs((correctedPairs) => (correctedPairs + 1));
      } else {
        setTimeout(() => {
          firstCard.ref.current.classList.remove('rotation-clockwise');
          secondCard.ref.current.classList.remove('rotation-clockwise');
          firstCard.current = false;
          secondCard.current = false;
        }, 300);
      }
    }
  }

  const level = (gameType) => {
    if(gameType===4)
      {
        return 'easy'
      }
      else if(gameType===6)
      {
        return 'medium'
      }
        else if(gameType===8)
          return 'hard'
      
      return
  };

  const levelClass = level(gameType);

  return (
    <>
      <div className={`bg-lime-500 ${levelClass}`}
        style={{ padding: '3px 3px', height: '7px' }}
      ></div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gameType}, 1fr)`,
          gap: '5px',
          height: '98vh',
          width: '100vw',
          padding: '3px 4px',
          backgroundColor: 'lightgray'
        }}
      >
        {
          Arrays.map((item, index) => {
            return (
              <GridComponents 
                key={item.id} 
                id={item.id} 
                value={item.number} 
                handleCardOnClick={handleCardOnClick}
              />
            );
          })
        }
      </div>
    </>
  );
}

export default Playgame;

