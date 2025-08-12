import React, { useState } from 'react'
import joyful from "../assets/joyful.png"
import scared from "../assets/scared.png"
import sad from "../assets/sad.png"
import powerful from "../assets/powerful.png"
import peaceful from "../assets/peaceful.png"

import LogEmotionCard from './LogEmotionCard'

const MoodForm = () => {
  const [showLogEmotionCard, setShowLogEmotionCard] = useState(false)
  return (
    <>
      <form>
        <div className='relative min-h-80 m-10 rounded-2xl w-auto overflow-hidden'>
        <div className='flex absolute inset-0 bg-[linear-gradient(to_right,#FFE6B3,#FFCCE5)] blur-xl opacity-80 shadow-lg -z-10'></div>
        <div className='flex flex-col items-center justify-center gap-2 w-full mt-4 z-10'>
          <div className='bg-transparent flex'>
          <button><img src={joyful} alt="" className='size-50'/></button>
          <button><img src={scared} alt="" className='h-30 w-45'/></button>
          <button><img src={sad} alt="" className='size-42'/></button>
          <button><img src={peaceful} alt="" className='size-42'/></button>
          <button><img src={powerful} alt="" className='size-45'/></button>
          <button><img src={joyful} alt="" className='size-50'/></button>
          </div>
          <div>
            <h1 className='font-bold text-2xl'>How are you feeling today?</h1>
            <p className='font-light text-gray-900'>Pause and take a moment to reflect.</p>
            <button onClick={(e)=>{
              e.preventDefault();
              setShowLogEmotionCard(true)}} 
              className='bg-amber-600 p-2 rounded-lg h-10 min-w-60 hover:bg-amber-500 cursor-pointer mb-6 text-white'>Log Emotions</button>
            {showLogEmotionCard && <LogEmotionCard onClose={()=>setShowLogEmotionCard(false)}/>}
          </div>
        </div>
        </div>
        
      </form>
    </>
  )
}

export default MoodForm
