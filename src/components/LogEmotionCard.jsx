import React , {useRef} from 'react'
import joyful from '../assets/joyful.png'
import { X } from 'lucide-react';



const LogEmotionCard = ({onClose}) => {
  const cardRef = useRef();
  const closePopup = (e) =>{
    if(cardRef.current && !cardRef.current.contains(e.target)){
      // console.log(cardRef.current);
      // console.log(e.target);
      onClose();
    }
  }
  return (
  <div onClick= {closePopup} className="fixed inset-0 bg-white/10 backdrop-blur-sm z-40 flex justify-center items-center">
    <div className='mt-2 mb-20 flex flex-col gap-2'>
      <button onClick={onClose} className='place-self-end mx-30 text-black '><X size={20}/></button>
      <div ref = {cardRef} className='bg-[linear-gradient(to_top,#ffd6c0,#ebd8ff)] flex flex-col justify-center items-center mx-30 w-2/3 p-10 shadow-lg rounded-2xl'>
      <h1 className='font-extrabold text-3xl'>Log Emotion</h1>
      <img src={joyful} alt="" className='size-30'/>
      <p className='font-bold text-2xl mb-3'>I'm feeling Sad</p>
      <form className='flex flex-col gap-3 justify-center items-center'>
      <textarea placeholder="Write down your thoughts and reflect on how you're feeling!" name="" id="" className='w-96 h-32 p-3 border-gray-700 border rounded-md'></textarea>
      <button type='submit' className='bg-amber-500 text-white rounded-2xl w-40 h-10'>Save</button>
      </form>
       </div>
    </div>
    </div>

  )
}

export default LogEmotionCard
