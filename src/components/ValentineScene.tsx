import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useDuration } from './DurationCounter';
import { TreeSVG } from './TreeSVG';

const splitText = (text: string) => {
  return text.split('').map((char, index) => (
    <span key={index} className="type-char" style={{ opacity: 0 }}>
      {char}
    </span>
  ));
};

export default function ValentineScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  const [hasStarted, setHasStarted] = useState(false);
  // Updated start date as requested
  const startDate = new Date('2025-01-04T00:00:00'); 
  const timeText = useDuration(startDate);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    
    // Hide paths initially
    gsap.set('.trunk-path, .branch-path', {
      strokeDasharray: (i, target) => target.getTotalLength(),
      strokeDashoffset: (i, target) => target.getTotalLength(),
    });
    
    // Initialize heart positions using GSAP from data attributes
    gsap.set('.foliage-heart', {
      x: (i, target) => parseFloat(target.getAttribute('data-x') || '0'),
      y: (i, target) => parseFloat(target.getAttribute('data-y') || '0'),
      rotation: (i, target) => parseFloat(target.getAttribute('data-rotation') || '0'),
      scale: 0
    });

    gsap.set('.float-heart', {
      x: (i, target) => parseFloat(target.getAttribute('data-x') || '0'),
      y: (i, target) => parseFloat(target.getAttribute('data-y') || '0'),
      rotation: (i, target) => parseFloat(target.getAttribute('data-rotation') || '0'),
      scale: (i, target) => parseFloat(target.getAttribute('data-scale') || '1'),
      opacity: 0 // Hidden initially
    });
    
  }, []);

  const handleStart = async () => {
    if (hasStarted) return;
    setHasStarted(true);
    
    // Request fullscreen to hide the mobile browser URL bar!
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        await (document.documentElement as any).webkitRequestFullscreen();
      }
    } catch (e) {
      console.log("Fullscreen API not supported or blockd.");
    }
    
    tlRef.current = gsap.timeline();
    const tl = tlRef.current;

    // Stage 1: Button shrinks and becomes seed
    tl.to('.btn-heart-text', { opacity: 0, duration: 0.2 })
      .to('.btn-heart-wrapper', { scale: 0, duration: 0.3, ease: 'back.in(2)' }, '<')
      
      // Seed drops from button position (500, 360) to ground (500, 620)
      // Since seed is at 620 natively, starting it at -260 places it at 360 exactly!
      .set('.seed-dot', { opacity: 1, y: -260 }) 
      .to('.seed-dot', { y: 0, duration: 0.8, ease: 'bounce.out' })
      .to('.seed-dot', { opacity: 0, duration: 0.2 }, '+=0.2')

      // Stage 2: Trunk Growth (in the center)
      .set('.tree-structure', { opacity: 1 })
      .to('.trunk-path', {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power2.inOut'
      }, '-=0.1')

      // Stage 3: Branch Growth
      .to('.branch-path', {
        strokeDashoffset: 0,
        opacity: 1, // Fades in as it starts growing, preventing dot artifacts
        duration: 1.5,
        ease: 'power1.inOut',
        stagger: 0.1
      }, '-=0.5')

      // Stage 4: Foliage Growth
      .to('.foliage-heart', {
        scale: (i, target) => parseFloat(target.getAttribute('data-target-scale') || '1'),
        duration: 1.2, // Slower individual pop
        ease: 'back.out(1.5)',
        stagger: {
          amount: 3.5, // Slower overall cascade
          from: 'start'
        }
      }, '-=1.0')

      // Stage 5: Move Tree to the Right
      // Moving 260px right leaves left side completely empty for text
      .to('.tree-group', {
        x: 260, 
        duration: 2,
        ease: 'power2.inOut'
      }, '+=0.2')

      // Stage 6: Text Reveal (Typewriter Effect)
      .set('.romantic-message', { opacity: 1 }, '-=0.5')
      .to('.type-char', { 
        opacity: 1, 
        duration: 0.01, 
        stagger: 0.04, 
        ease: 'none' 
      }, '<')
      .to('.duration-counter-svg', { opacity: 1, duration: 1.5, ease: 'power2.out' }, '+=0.5');

    // Stage 7: Falling Leaves blowing towards the text (leftwards)
    gsap.utils.toArray('.float-heart').forEach((leaf: any) => {
      const tlLeaf = gsap.timeline({ repeat: -1, delay: 4.5 + Math.random() * 3 });
      
      const startX = parseFloat(leaf.getAttribute('data-x'));
      const startY = parseFloat(leaf.getAttribute('data-y'));
      
      tlLeaf
        // Reset to starting position
        .set(leaf, { x: startX, y: startY, opacity: 0 })
        
        // Fade in rapidly
        .to(leaf, { opacity: 0.8, duration: 1 })
        
        // Float diagonally leftwards (towards the text) and downwards
        .to(leaf, {
          x: startX - (300 + Math.random() * 400), 
          y: startY + (150 + Math.random() * 250), 
          rotation: `+=${(Math.random() - 0.5) * 360}`,
          duration: 3 + Math.random() * 2,
          ease: 'power1.inOut'
        }, '<')
        
        // Fade out gracefully before resetting
        .to(leaf, { opacity: 0, duration: 1 }, '-=1');
    });

  };

  return (
    <div className="valentine-scene" ref={containerRef}>
      <div className="top-accent" />

      <TreeSVG ref={svgRef} onStart={handleStart} timeText={timeText} />

      <div className="text-layer">
        <div className="romantic-message">
          <p>{splitText("Para el amor de mi vida:")}</p>
          <p>
            {splitText("Te amo hasta la luneca ida y vuelteca.")}<br />
            {splitText("Infinitamente.")}
          </p>
          <p>
            {splitText("Quiero estar toda mi vida con vos.")}<br />
            {splitText("Sos mi pupina hermosa.")}
          </p>
          <p className="payoff-text">{splitText("¡Te amo!")}</p>
        </div>
      </div>
    </div>
  );
}
