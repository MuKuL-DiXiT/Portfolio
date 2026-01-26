import { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

export default function LandingAnimation({darkMode}) {
  const [animationStage, setAnimationStage] = useState(0);
  const [startExitAnimation, setStartExitAnimation] = useState(false);
  const [data, setData] = useState(null);
  
  // Add marker font if not already included in your project
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  useEffect(()=>{
        async function fetchData(){
            const response = await fetch('/Welcome.json')
            const json = await response.json();
            setData(json)
        }
        fetchData();
    }, [])
  useEffect(() => {
    const timers = [
      setTimeout(() => setStartExitAnimation(true), 7000)
    ];
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);
  
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${darkMode?'bg-gray-900':'bg-black/70'} 
      transition-opacity duration-1000 ${startExitAnimation ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div>
          <Lottie animationData={data} loop={true} className=""/>
        </div>
      </div>
    </div>
  );
}
