import { useState } from 'react'
import MoodForm from './components/MoodForm'
import MoodList from './components/MoodList'


function App() {
  const [thoughts, setThoughts] = useState('')
  const [emotion, setEmotion] = useState('joyful')
  return (
    <>
    <div className="relative min-h-screen w-full overflow-hidden ">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffd6c0,#ebd8ff)] blur-xl opacity-80 -z-10"></div>
      <MoodForm/>
      <div className=''>
        <MoodList/>
      </div>      
    </div>
    </>
  )
}

export default App
