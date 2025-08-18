import {createContext, useContext, useState} from "react"

export const EmotionContext = createContext();
// const [emotion, setEmotion] = useState('')
export const EmotionProvider = ({children})=> {
    const [emotion, setEmotion] = useState('')
    const [moods, setMoods] = useState([])
    const emotionIcons = import.meta.glob('../assets/*.png', { eager: true });

    const saveMood = ()=>{
        if(emotion.trim()){
            setMoods((prev)=>[...prev, emotion]);
        }
    }
    return (
        <EmotionContext.Provider value={{emotion, setEmotion, moods, saveMood, emotionIcons}}>
            {children}
        </EmotionContext.Provider>
    );
}