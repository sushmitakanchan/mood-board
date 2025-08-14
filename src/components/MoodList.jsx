import React, { useContext } from 'react'
import LogEmotionCard from './LogEmotionCard'
import { EmotionContext } from '../context/EmotionContext';
import { SquarePen, Trash2 } from 'lucide-react';

const MoodList = ({thoughts}) => {
  const {emotion} = useContext(EmotionContext);
  console.log(emotion);
  
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
      <div className='relative min-h-80 m-10 rounded-2xl w-auto'>
        <div className='flex absolute inset-0 bg-[linear-gradient(to_right,#FFD6E0,#FDE2FF)] blur-xl opacity-80 -z-10'></div>
         <div className="p-8 z-10 relative">
          <ul className='flex flex-col gap-2'>
            {thoughts.map((thought, index)=>(
              <div className=' bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl shadow-lg border border-pink-300 p-4 max-w-3/4 h-25'>
              <li className='flex justify-between' key={index}>
                <div className='flex flex-col items-start'>
                <h4 className='text-xs text-gray-700'>{entry} : </h4>
                <h1 className='font-bold text-xl tracking-wide'>Feeling {emotion}</h1>
                <p className='text-sm text-gray-600 font-bold italic'>{thought}</p>
                </div>
                <div className='flex justify-end gap-2'>
                <SquarePen color="#cf6017" />
                <Trash2 color="#cf6017"/>
                </div>
              </li>
              </div>
            ))}
          </ul>
        
      </div>
    </div>
  )
}

export default MoodList
