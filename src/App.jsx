import { useState } from 'react'
import MoodForm from './components/MoodForm'
import MoodList from './components/MoodList'
import { EmotionProvider } from './context/EmotionContext'
// import {EmotionContext} from './context/EmotionContext'


function App() {
  const [thoughts, setThoughts] = useState([])
  // const [emotion, setEmotion] = useState('')

  const onHandlethoughts = (thought) =>{
    setThoughts((prev)=> [...prev, thought])
  }

  return (
    <EmotionProvider>
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffd6c0,#ebd8ff)] blur-xl opacity-80 -z-10"></div>
      <MoodForm onHandlethoughts={onHandlethoughts}/>
      <MoodList thoughts={thoughts}/>     
    </div>
    </EmotionProvider>
  )
}

export default App
