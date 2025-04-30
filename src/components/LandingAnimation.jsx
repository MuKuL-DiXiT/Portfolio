import { useState, useEffect } from 'react';

export default function LandingAnimation() {
  const [animationStage, setAnimationStage] = useState(0);
  const [startExitAnimation, setStartExitAnimation] = useState(false);
  
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
  
  useEffect(() => {
    // Animation sequence timing
    const timers = [
      setTimeout(() => setAnimationStage(1), 400),  // M appears
      setTimeout(() => setAnimationStage(2), 800),  // D appears 
      setTimeout(() => setAnimationStage(3), 1200), // Line appears
      setTimeout(() => setAnimationStage(4), 1600), // Text appears
      setTimeout(() => setStartExitAnimation(true), 3000) // Start exit animation
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);
  
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black z-50 
      transition-opacity duration-1000 ${startExitAnimation ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="flex justify-center items-center mb-6 relative">
          <div className={`text-9xl  text-red-700 transition-all duration-1000 
            font-marker tracking-wider ${animationStage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-32'}`}
            style={{ fontFamily: "'Permanent Marker', cursive" }}>
            M
          </div>
          
          <div className={`text-9xl  text-red-700 transition-all duration-1000 
            font-marker tracking-wider ${animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-x-32'}`}
            style={{ fontFamily: "'Permanent Marker', cursive" }}>
            D
          </div>
        </div>
      </div>
    </div>
  );
}
