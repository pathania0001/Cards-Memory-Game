import React from 'react'
import   "../../Card.css"
function Front({ flipHandle }) {
  return (
    <div
      className='border-2 border-slate-500 bg-orange-400 hover:bg-amber-500 duration-700 flex-col justify-center align-center rounded-xl flip-card-front'
      onClick={() => {
        flipHandle();
      }}
    >
      <h1 className='text-9xl font-semibold text-white flex justify-center mt-9 antialiased'>F</h1>
      <p className='text-2xl font-bold text-gray-600 flex justify-center antialiased'>Figures</p>
    </div>
  );
}
export default Front;