"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Enhanced random color generator with more variety and depth
const getRandomColor = (type: 'white' | 'red' | 'black'): string => {
  switch (type) {
    case 'white':
      // Shades of white with slight color tinting
      const whiteBase = Math.floor(Math.random() * 40) + 215; // 215-255
      const whiteTint1 = Math.floor(Math.random() * 20); // Slight color variation
      const whiteTint2 = Math.floor(Math.random() * 20);
      return `rgb(${whiteBase}, ${whiteBase - whiteTint1}, ${whiteBase - whiteTint2})`;
    case 'red':
      // Expanded red palette including deep crimsons and lighter pinks
      const redBase = Math.floor(Math.random() * 180) + 75; // 75-255
      const redGreen = Math.floor(Math.random() * (redBase/4)); // More red variation
      const redBlue = Math.floor(Math.random() * (redBase/4));
      return `rgb(${redBase}, ${redGreen}, ${redBlue})`;
    case 'black':
      // Richer blacks with subtle color undertones
      const blackBase = Math.floor(Math.random() * 60); // 0-60
      const blackTint1 = Math.floor(Math.random() * 15); // Subtle undertone
      const blackTint2 = Math.floor(Math.random() * 15);
      return `rgb(${blackBase + blackTint1}, ${blackBase}, ${blackBase + blackTint2})`;
  }
};

// Generate initial gradient colors
const generateInitialColors = () => {
  return {
    gradient1: {
      color1: getRandomColor('white'),
      color2: getRandomColor('red'),
      color3: getRandomColor('black')
    },
    gradient2: {
      color1: getRandomColor('black'),
      color2: getRandomColor('red'),
      color3: getRandomColor('white')
    },
    gradient3: {
      color1: getRandomColor('red'),
      color2: getRandomColor('black'),
      color3: getRandomColor('white')
    }
  };
};

export default function DisturbancePage() {
  const router = useRouter();
  const [gradientSets, setGradientSets] = useState(generateInitialColors());
  const [activeGradient, setActiveGradient] = useState(1);
  
  // Switch between gradient sets at random intervals
  useEffect(() => {
    // Generate new colors periodically
    const colorTimer = setInterval(() => {
      setGradientSets(generateInitialColors());
    }, 10000); // Change color palette every 10 seconds
    
    // Switch between gradients
    const switchTimer = setInterval(() => {
      setActiveGradient(prev => (prev % 3) + 1);
    }, 5000); // Switch gradients every 5 seconds
    
    return () => {
      clearInterval(colorTimer);
      clearInterval(switchTimer);
    };
  }, []);

  // Handle return to home
  const handleReturn = () => {
    router.push('/');
  };
  
  return (
    <div className="disturbance-container">
      {/* Only the disturbance button is visible */}
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          className="text-black font-normal py-2 px-4 rounded border border-red-500 bg-red-500 font-button hover:bg-red-600 transition-colors"
          onClick={handleReturn}
        >
          Disturbance
        </button>
      </div>
      
      {/* Add CSS for the disturbance effect */}
      <style jsx global>{`
        body {
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        
        .disturbance-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        
        .disturbance-container:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            ${Math.random() * 360}deg,
            ${gradientSets.gradient1.color1},
            ${gradientSets.gradient1.color2},
            ${gradientSets.gradient1.color3}
          );
          background-size: 400% 400%;
          animation: gradientAnimation1 30s ease infinite;
          opacity: ${activeGradient === 1 ? 1 : 0};
          transition: opacity 3s ease-in-out;
          z-index: 1;
        }
        
        .disturbance-container:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            ${Math.random() * 360}deg,
            ${gradientSets.gradient2.color1},
            ${gradientSets.gradient2.color2},
            ${gradientSets.gradient2.color3}
          );
          background-size: 400% 400%;
          animation: gradientAnimation2 30s ease infinite 1s;
          opacity: ${activeGradient === 2 ? 1 : 0};
          transition: opacity 3s ease-in-out;
          z-index: 2;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            ${Math.random() * 360}deg,
            ${gradientSets.gradient3.color1},
            ${gradientSets.gradient3.color2},
            ${gradientSets.gradient3.color3}
          );
          background-size: 400% 400%;
          animation: gradientAnimation3 30s ease infinite 2s;
          opacity: ${activeGradient === 3 ? 1 : 0};
          transition: opacity 3s ease-in-out;
          z-index: 3;
        }
        
        @keyframes gradientAnimation1 {
          0% { background-position: 0% 50% }
          25% { background-position: 50% 100% }
          50% { background-position: 100% 50% }
          75% { background-position: 50% 0% }
          100% { background-position: 0% 50% }
        }
        
        @keyframes gradientAnimation2 {
          0% { background-position: 100% 50% }
          25% { background-position: 50% 0% }
          50% { background-position: 0% 50% }
          75% { background-position: 50% 100% }
          100% { background-position: 100% 50% }
        }
        
        @keyframes gradientAnimation3 {
          0% { background-position: 50% 0% }
          25% { background-position: 100% 50% }
          50% { background-position: 50% 100% }
          75% { background-position: 0% 50% }
          100% { background-position: 50% 0% }
        }
      `}</style>
      
      {/* Additional overlay for the third gradient */}
      <div className="overlay"></div>
    </div>
  );
} 