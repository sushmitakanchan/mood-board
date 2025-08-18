import React, { useContext } from 'react'
import LogEmotionCard from './LogEmotionCard'
import { EmotionContext } from '../context/EmotionContext';
import { SquarePen, Trash2 } from 'lucide-react';

const MoodList = ({thoughts, onDelete, onEdit}) => {

  const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: '2-digit',
  minute: '2-digit'
};

const {emotionIcons} = useContext(EmotionContext)

  return (
      <div className='relative min-h-80 m-10 rounded-2xl w-auto'>
        <div className='flex absolute inset-0 bg-[linear-gradient(to_right,#FFD6E0,#FDE2FF)] blur-xl opacity-80 -z-10'></div>
         <div className="p-8 z-10 relative">
          <ul className='flex flex-col gap-2'>
            {thoughts.map((data, index)=>(
              <div className=' bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl shadow-lg border border-pink-300 p-3 max-w-3/4 h-25' key={index}>
              <li className='flex justify-between items-center'>
                {/* <div className='flex flex-col items-start'> */}
                <div className='flex items-center gap-2'>
                <img src={emotionIcons[`../assets/${data.emotion.toLowerCase()}.png`].default} alt={data.emotion} className='w-15 h-20'/>
                <div className="flex flex-col">
                <h4 className='text-xs text-gray-700'>{new Date().toLocaleString("en-US", options)} </h4>
                <h1 className='font-bold text-xl tracking-wide'>Feeling {data.emotion}</h1>
                <p className='text-sm text-gray-600 font-bold italic'>{data.thought}</p>
                </div>
                </div>
                {/* </div> */}
                <div className='flex justify-end gap-2 mb-4'>
                <button onClick={()=>onEdit(data)}><SquarePen color="#cf6017"/></button>
                <button onClick={()=>onDelete(data)}><Trash2 color="#cf6017"/></button>
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
