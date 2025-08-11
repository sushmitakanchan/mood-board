import React, { useState } from 'react'
import joyful from "../assets/joyful.png"
import LogEmotionCard from './LogEmotionCard'

const MoodForm = () => {
  const [showLogEmotionCard, setShowLogEmotionCard] = useState(false)
  return (
    <>
      <form>
        <div className='relative min-h-80 m-10 rounded-2xl w-auto overflow-hidden'>
        <div className='flex absolute inset-0 bg-[linear-gradient(to_bottom,#FFF9C4,#FFD8B1)] blur-xl opacity-80 shadow-lg -z-10'></div>
        <div className='flex flex-col items-center justify-center gap-2 w-full mt-4 z-10'>
          <div className='bg-transparent'>
          <button><img src={joyful} alt="" className='size-50'/></button>
          <button><img src={joyful} alt="" className='size-50'/></button>
          <button><img src={joyful} alt="" className='size-50'/></button>
          <button><img src={joyful} alt="" className='size-50'/></button>
          <button><img src={joyful} alt="" className='size-50'/></button>
          <button><img src={joyful} alt="" className='size-50'/></button>
          </div>
          <div>
            <h1>How are you feeling today?</h1>
            <p>Pause and take a moment to reflect.</p>
            <button onClick={(e)=>{
              e.preventDefault();
              setShowLogEmotionCard(true)}} 
              className='bg-amber-500 p-2 rounded-lg h-10 min-w-60 hover:bg-amber-600 cursor-pointer mb-6'>Log Emotions</button>
            {showLogEmotionCard && <LogEmotionCard onClose={()=>setShowLogEmotionCard(false)}/>}
          </div>
        </div>
        </div>
        
      </form>
    </>
  )
}

export default MoodForm
