import { useState, useEffect } from 'react';
import ValentineScene from './components/ValentineScene';
import { Smartphone } from 'lucide-react';

function App() {
  // Safe check for window
  const getIsPortrait = () => typeof window !== 'undefined' ? window.innerHeight > window.innerWidth : true;
  
  const [isPortrait, setIsPortrait] = useState(getIsPortrait());
  const [showOverlay, setShowOverlay] = useState(getIsPortrait());

  useEffect(() => {
    let timeoutId: any;
    const handleResize = () => {
      const portrait = getIsPortrait();
      setIsPortrait(portrait);
      if (portrait) {
        clearTimeout(timeoutId);
        setShowOverlay(true);
      } else {
        // Wait for the CSS expanding hole animation to finish before unmounting
        timeoutId = setTimeout(() => setShowOverlay(false), 1200);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className="scene-container">
      {showOverlay && (
        <div className={`portrait-overlay ${!isPortrait ? 'unlocked' : ''}`}>
          <div className="black-hole"></div>
          <div className="overlay-content">
            <div className="rotate-icon-wrapper">
              <Smartphone size={64} strokeWidth={1.5} color="white" />
            </div>
            <h2>Por favor, gira tu celular</h2>
          </div>
        </div>
      )}

      <ValentineScene isPortrait={isPortrait} />
    </div>
  );
}

export default App;
