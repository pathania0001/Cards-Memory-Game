import React from 'react'
import "./Card.css";
import  F from "./utils/ProfileComponents/F"
import L from "./utils/ProfileComponents/L";
import  I from "./utils/ProfileComponents/I"
import P from "./utils/ProfileComponents/P";
function Profile() {
  return (
    <>
         <div className='bg-gradient-to-r from-teal-400 to-yellow-200 w-100 h-screen max-w-screen flex justify-evenly items-center'>
            <div className='flex-col w-fit'>
            <h1 className='text-wrap font-bold text-7xl bg-gradient-to-r from-red-900 to-blue-900 inline-block text-transparent bg-clip-text mb-8 antialiased'>Flip-Game</h1>
            <p className='text-2xl font-medium bg-blue-900 text-transparent  bg-clip-text antialiased'>Text your memory-mapping</p>
            </div>
           
             <div className='grid grid-cols-2 grid-rows-2 bg-transparent max-w-2xl w-full h-4/6 relative ' style={{gap:"2px"}}>
             <F/>
             <L/>
             <I/>
             <P/>
            
             </div>
         </div>
    </>
  )
}

export default Profile