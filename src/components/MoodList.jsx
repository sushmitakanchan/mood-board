import React from 'react'
import LogEmotionCard from './LogEmotionCard'

const MoodList = ({thoughts, emotion}) => {
  const date = new Date();
  const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: '2-digit',
  minute: '2-digit'
};
  const entry = date.toLocaleString("en-US", options)
  return (
      <div className='relative min-h-80 m-10 rounded-2xl w-auto overflow-hidden'>
        {/* <div className='flex absolute inset-0 bg-[linear-gradient(to_top,#FFD6E0,#FDE2FF)] blur-xl opacity-80 shadow-lg -z-10'></div> */}
         <div className="p-8 z-10 relative">
          <ul className='flex flex-col gap-2'>
            {thoughts.map((thought, index)=>(
              <div className=' bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl shadow-lg border border-pink-300 p-4 max-w-screen h-25'>
              <li key={index}>
                <h4>{entry} : </h4>
                <h1>Feeling {emotion}</h1>
                <p>{thought}</p>
              </li>
              </div>
            ))}
          </ul>
        
      </div>
    </div>
  )
}

export default MoodList
