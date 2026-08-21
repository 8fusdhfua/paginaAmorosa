import { useRef, useEffect } from 'react';
import { FileHeart, MousePointer2 } from 'lucide-react';
import gsap from 'gsap';

interface Props {
  onStart: () => void;
}

export default function WhatsAppIntro({ onStart }: Props) {
  const cursorRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate cursor moving to the message and clicking
    const tl = gsap.timeline();
    
    tl.fromTo(cursorRef.current, 
      { x: 50, y: 50, opacity: 0 },
      { x: 0, y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.2 }
    )
    .to(cursorRef.current, { scale: 0.9, duration: 0.1 })
    .to(cursorRef.current, { scale: 1, duration: 0.1 })
    .to(containerRef.current, { opacity: 0, duration: 0.3, delay: 0.2, onComplete: onStart });
    
    return () => {
      tl.kill();
    };
  }, [onStart]);

  return (
    <div className="whatsapp-scene" ref={containerRef}>
      <div className="whatsapp-bubble" onClick={onStart}>
        <FileHeart size={32} color="#fff" />
        <div>
          <div style={{ fontWeight: 600, fontSize: '15px' }}>Para Ti ❤️.html</div>
          <div style={{ fontSize: '12px', opacity: 0.8 }}>HTML • 217 B</div>
        </div>
        <MousePointer2 
          ref={cursorRef}
          className="whatsapp-cursor" 
          size={40} 
          color="#fff" 
          fill="#fff" 
          stroke="#000" 
          strokeWidth={1}
        />
      </div>
    </div>
  );
}
