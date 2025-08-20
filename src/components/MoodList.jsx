import React, { useContext, useEffect , useState} from 'react'
import LogEmotionCard from './LogEmotionCard'
import { EmotionContext } from '../context/EmotionContext';
import { Heading2, SquarePen, Trash2 } from 'lucide-react';

const MoodList = ({thoughts, onDelete, onEdit}) => {
const {emotion, emotionIcons} = useContext(EmotionContext)

// const createdAt = new Date().toLocaleString("en-US", options)
const [sortedData, setSortedData] = useState([])
const [sortOrder, setSortOrder] = useState('newest')
const [filterEmotion, setFilterEmotion] = useState("All")

useEffect(()=>{
  let filtered = [...thoughts]
  if(filterEmotion !== "All"){
    filtered = filtered.filter((t)=>t.emotion === filterEmotion)
    console.log(filtered);
    
  }
  if(sortOrder === 'newest'){
    filtered.sort((a,b)=>b.timestamp - a.timestamp)
    
  }else{
    filtered.sort((a,b)=> a.timestamp - b.timestamp)  
  }
  setSortedData(filtered)
}, [thoughts, sortOrder, filterEmotion])

  return (
      <div className='relative min-h-80 m-10 rounded-2xl w-auto'>
        <div className='flex absolute inset-0 bg-[linear-gradient(to_right,#FFD6E0,#FDE2FF)] blur-xl opacity-80 -z-10'></div>
         <div className="p-8 z-10 relative mb-20">
          <h1 className='text-5xl font-bold'>Emotion Journal Enteries:</h1>
              <div className='flex justify-center ml-70 gap-2'>
              <select className='border-pink-400 border mb-2 mt-2 rounded shadow-md p-1' onChange={(e)=>setSortOrder(e.target.value)} value={sortOrder}>
                <option disabled>Sort by</option>
                <option value="newest">Newest first</option>
                <option value="oldest">Oldest first</option>
              </select>
              <select className='bg-transparent text-black rounded-lg w-30 mb-2 mt-2 shadow-md p-1 border border-pink-400' onChange={(e)=>setFilterEmotion(e.target.value)} value={filterEmotion}>
                <option value="All">All Emotions</option>
                <option value="Joyful">Joyful</option>  
                <option value="Scared">Scared</option>
                <option value="Sad">Sad</option>
                <option value="Peaceful">Peaceful</option>
                <option value="Powerful">Powerful</option>
                <option value="Angry">Angry</option>
              </select>
              </div>
          <ul className='flex flex-col gap-2'>
            {sortedData.length > 0 ? sortedData.map((data, index)=>(
              <div className=' bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-xl shadow-lg border border-pink-300 p-3 max-w-3/4 h-25' key={index}>
              <li className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                <img src={emotionIcons[`../assets/${data.emotion.toLowerCase()}.png`].default} alt={data.emotion} className='w-15 h-20'/>
                <div className="flex flex-col">
                <h4 className='text-xs text-gray-700'>{data.createdAt}</h4>
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
            )): <h3 className='text-center text-gray-600 mt-10'>No enteries found.</h3>}
          </ul>
        
      </div>
    </div>
  )
}

export default MoodList
