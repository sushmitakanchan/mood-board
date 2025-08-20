import { useEffect, useState } from 'react'
import MoodForm from './components/MoodForm'
import MoodList from './components/MoodList'
import { EmotionProvider } from './context/EmotionContext'


function App() {
  const [thoughts, setThoughts] = useState(()=>{
  const saved = window.localStorage.getItem('thoughtsList');
   return saved ? JSON.parse(saved) : [];
  })
    const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: '2-digit',
    minute: '2-digit'
  };
// emotion: sad, happy, angry and thought: anything you write inside the textarea
  const onHandlethoughts = (emotion, thought) =>{
    console.log("emotion:", emotion);
    console.log("thought:", thought);
    
    setThoughts((prev)=> [...prev, {createdAt:new Date().toLocaleString("en-US", options), emotion, thought, timestamp: Date.now()}])
  }

  const editThought = (oldThought)=>{
    let updatedThought = prompt('Edit thought:', oldThought.thought)
    if(updatedThought !== null){
      setThoughts(thoughts.map(i=>i===oldThought? {...i, thought: updatedThought}: i))
      console.log("updated");
      
    }
  }

  const deleteThought = (thought)=>{
  setThoughts(thoughts.filter(i=>i!==thought))
}

useEffect(()=>{
  window.localStorage.setItem('thoughtsList', JSON.stringify(thoughts))
}, [thoughts])

  return (
    <EmotionProvider>
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffd6c0,#ebd8ff)] blur-xl opacity-80 -z-10"></div>
      <MoodForm onHandlethoughts={onHandlethoughts}/>
      <MoodList thoughts={thoughts} onDelete={deleteThought} onEdit={editThought}/>     
    </div>
    </EmotionProvider>
  )
}

export default App
