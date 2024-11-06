import React from 'react'
import   "../../Card.css"
function Back({ flipHandle }) {
  return (
    <div className='border-2 border-slate-500 bg-sky-900/30 duration-700 rounded-xl flip-card-back' 
    onClick={() => {
      flipHandle();
    }}
    >
    <h1 className='text-3xl font-semibold text-white flex justify-center mt-3 antialiased'>INSTRUCTION</h1>
          <p className=' text-white text-[14px] text-wrap font-bold  flex m-2 antialiased'>
          Flip is a timed card memo y game.
            </p>
             <p className='text-[14px] text-wrap font-bold text-white  flex m-2 antialiased'> Click the blue cards to see what symbol
             they uncover and try to find the matching symbol underneath the other cards.
             </p>
             <p className='text-[14px] text-wrap font-bold text-white  flex m-2 antialiased'>
              Uncover two matching symbols at once to eliminate them from the game
              Eliminate all cards as fast as you can to win the game. Havefun FLIPing
              </p>
    </div>
  )
}

export default Back