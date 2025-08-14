import React, { useContext, useState } from "react";
import joyful from "../assets/joyful.png";
import scared from "../assets/scared.png";
import sad from "../assets/sad.png";
import powerful from "../assets/powerful.png";
import peaceful from "../assets/peaceful.png";
import angry from "../assets/angry.png"
import LogEmotionCard from "./LogEmotionCard";
import { EmotionContext } from "../context/EmotionContext";

const MoodForm = ({ onHandlethoughts }) => {
  const [showLogEmotionCard, setShowLogEmotionCard] = useState(false);
  const { setEmotion, moods, saveMood } = useContext(EmotionContext);
  
  const senseEmotion = (e) => {
    e.preventDefault();
    setEmotion(e.target.id);
    saveMood()
  };
  return (
    <>
      <form>
        <div className="relative min-h-80 m-10 rounded-2xl w-auto overflow-hidden">
          {/* <div className='flex absolute inset-0 bg-[linear-gradient(to_right,#FFE6B3,#FFCCE5)] blur-xl opacity-80 shadow-lg -z-10'></div> */}
          <div className="flex absolute inset-0 bg-[linear-gradient(to_left,rgba(255,255,255,0.7),rgba(230,230,250,0.7),rgba(255,250,205,0.7))] blur-xl opacity-80 shadow-md -z-10"></div>
          <div className="flex flex-col items-center justify-center gap-2 w-full mt-4 z-10">
            <div className="bg-transparent flex">
              <button onClick={senseEmotion}>
                <img src={joyful} alt="" id="Joyful" className="size-50" />
              </button>
              <button onClick={senseEmotion}>
                <img src={scared} alt="" id="Scared" className="h-30 w-45" />
              </button>
              <button onClick={senseEmotion}>
                <img src={sad} alt="" id="Sad" className="size-42" />
              </button>
              <button onClick={senseEmotion}>
                <img src={peaceful} alt="" id="Peaceful" className="size-42" />
              </button>
              <button onClick={senseEmotion}>
                <img src={powerful} alt="" id="Powerful" className="size-45" />
              </button>
              <button onClick={senseEmotion}>
                <img src={angry} alt="" id="Angry" className="h-40 w-35" />
              </button>
            </div>
            <div>
              <h1 className="font-bold text-2xl">How are you feeling today?</h1>
              {/* {moods? moods : "How are you feeling today?"} */}
              <p className="font-light text-gray-900">
                Pause and take a moment to reflect.
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogEmotionCard(true);
                }}
                className="bg-amber-600 p-2 rounded-lg h-10 min-w-60 hover:bg-amber-500 cursor-pointer mb-6 text-white"
              >
                Log Emotions
              </button>
              {showLogEmotionCard && (
                <LogEmotionCard
                  onClose={() => setShowLogEmotionCard(false)}
                  onSaveThoughts={onHandlethoughts}
                />
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default MoodForm;
