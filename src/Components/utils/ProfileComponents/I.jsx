import React, { useRef, useState, useEffect } from 'react';
import "../../Card.css"
import Back from '../../Profile-items/I/back';
import Front from '../../Profile-items/I/front';
function I() {
  const [flip, setFlip] = useState(false);
  const flipRef = useRef(null);

  useEffect(() => {
    if (flip) {
      flipRef.current.classList.add("rotation-clockwise");
    } else {
      flipRef.current.classList.remove("rotation-clockwise");
    }
  }, [flip]);

  function flipHandle() {
    setFlip(flip => !flip);
  }

  return (
    <div className='flip-card'>
      <div 
        className='flip-card-inner'
        ref={flipRef}
      >
        <Front flipHandle={flipHandle} />
        <Back flipHandle={flipHandle} />
      </div>
    </div>
  );
}


export default I