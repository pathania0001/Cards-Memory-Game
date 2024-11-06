import React from 'react'
import   "../../Card.css"
function Front({ flipHandle }) {
  return (
    <div className='border-2 border-slate-500  bg-orange-400 hover:bg-orange-500 duration-700 rounded-xl flip-card-front'
    onClick={() => {
      flipHandle();
    }}
    >
              <h1 className='text-9xl font-semibold text-white flex justify-center mt-9 antialiased'>P</h1>
              <p className='text-2xl font-bold text-gray-600 flex justify-center antialiased'>Play Now</p>
              </div>
  )
}

export default Front