import { forwardRef } from 'react';

// Reusable SVG Heart path
export const HeartPath = "M 0 -6 C 0 -12, 10 -12, 10 -6 C 10 -1.5, 0 5, 0 10 C 0 5, -10 -1.5, -10 -6 C -10 -12, 0 -12, 0 -6 Z";

interface HeartLeaf {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  color: string;
  delayIndex: number;
}

function isInsidePolygon(point: [number, number], vs: [number, number][]) {
  let x = point[0], y = point[1];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    let xi = vs[i][0], yi = vs[i][1];
    let xj = vs[j][0], yj = vs[j][1];
    let intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  return inside;
}

function generateHearts(): HeartLeaf[] {
  const hearts: HeartLeaf[] = [];
  const count = 1000; // Extremely dense, flawless coverage
  const colors = ['#E61C39', '#F4425A', '#FF7A92', '#FF9FAD', '#FFC2CB', '#B80F2A'];
  const centerX = 500;
  const centerY = 265; // Lowered to sit properly on the lowest branches
  
  // Generate perfect romantic heart polygon
  const heartPolygon: [number, number][] = [];
  for (let t = 0; t < Math.PI * 2; t += 0.05) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    heartPolygon.push([x, -y]); // Invert Y for SVG coordinates
  }

  let i = 0;
  // Bounding box for the parametric heart is roughly X: [-16, 16], Y: [-13, 18]
  while (hearts.length < count) {
    const px = (Math.random() - 0.5) * 36; // -18 to 18
    const py = (Math.random() - 0.5) * 36; // -18 to 18
    
    if (isInsidePolygon([px, py], heartPolygon)) {
      const scale = 14.2; // Increased by 5% (13.5 * 1.05 = 14.175)
      const finalX = centerX + px * scale + (Math.random() - 0.5) * 8;
      const finalY = centerY + py * scale + (Math.random() - 0.5) * 8;
      
      const distFromCenter = Math.sqrt(Math.pow(finalX - centerX, 2) + Math.pow(finalY - centerY, 2));

      // Positive distance so inside appears first (inside-out), heavily randomized to prevent visible rings
      const randomJitter = (Math.random() - 0.5) * 150; 
      const delay = distFromCenter + randomJitter;

      // Uniform size for all hearts
      const sizeScale = 0.85; 

      hearts.push({
        id: i++,
        x: finalX,
        y: finalY,
        scale: sizeScale, 
        rotation: (Math.random() - 0.5) * 45, // Less extreme rotation
        color: colors[Math.floor(Math.random() * colors.length)],
        delayIndex: delay, 
      });
    }
  }

  // Sort by delay index
  hearts.sort((a, b) => a.delayIndex - b.delayIndex);
  return hearts;
}

const heartsData = generateHearts();

interface TreeProps {
  onStart: () => void;
  timeText: string;
}

const BeautifulHeartPath = "M 0 -15 C 0 -30, 25 -30, 25 -15 C 25 -5, 0 15, 0 25 C 0 15, -25 -5, -25 -15 C -25 -30, 0 -30, 0 -15 Z";

export const TreeSVG = forwardRef<SVGSVGElement, TreeProps>(({ onStart, timeText }, ref) => {
  return (
    <svg 
      ref={ref} 
      className="svg-layer" 
      viewBox="0 0 1000 730" 
      preserveAspectRatio="xMidYMid meet"
    >
      <line 
        x1="50" y1="630" x2="950" y2="630" 
        stroke="var(--ground-line)" 
        strokeWidth="2" 
        strokeLinecap="round" 
      />
      
      {/* Timer Text sitting on the ground line */}
      <g className="duration-counter-svg" opacity="0">
        <text x="50" y="605" fontSize="16" fill="var(--dark-text)" fontFamily="Inter, sans-serif">Mi amor por vos empezó hace...</text>
        <text x="50" y="625" fontSize="18" fill="var(--dark-text)" fontWeight="600" fontFamily="Inter, sans-serif">{timeText}</text>
      </g>

      {/* Main interactive button inside SVG */}
      <g 
        className="btn-heart-svg" 
        transform="translate(500, 360)" 
        cursor="pointer" 
        onClick={onStart}
      >
        <g className="btn-heart-wrapper">
          {/* Moon Emoji Button */}
          <text
            x="0"
            y="0"
            fontSize="48"
            textAnchor="middle"
            dominantBaseline="central"
            className="btn-heart-pulse"
          >
            ⏾
          </text>
          
          {/* Callout Line */}
          <path 
            d="M 25 -25 L 60 -50 L 100 -50" 
            fill="none" 
            stroke="#E61C39" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeLinejoin="round"
            className="btn-heart-text" 
          />
          
          {/* Te Amo Text */}
          <text 
            x="110" 
            y="-45" 
            fontSize="22" 
            fill="#E61C39" 
            fontFamily="Georgia, serif" 
            fontStyle="italic"
            fontWeight="bold"
            className="btn-heart-text"
          >
            Te amo hasta la luneca
          </text>
        </g>
      </g>

      <g className="tree-group">
        <circle 
          className="seed-dot" 
          cx="500" 
          cy="620" 
          r="8" 
          fill="var(--heart-red)" 
          opacity="0"
        />

        <g className="tree-structure" opacity="0" fill="none" stroke="var(--trunk)" strokeLinecap="round" strokeLinejoin="round">
          {/* Trunk correctly aligned to 620 so round cap ends exactly at 630 */}
          <path className="trunk-path" d="M 500 620 Q 505 495 500 360" strokeWidth="20" />
          
          {/* Restored Original Branches */}
          <path className="branch-path" opacity="0" d="M 502 480 Q 450 400 380 340" strokeWidth="12" />
          <path className="branch-path" opacity="0" d="M 498 440 Q 560 380 620 310" strokeWidth="11" />
          <path className="branch-path" opacity="0" d="M 500 380 Q 480 320 440 250" strokeWidth="9" />
          <path className="branch-path" opacity="0" d="M 500 370 Q 540 310 580 230" strokeWidth="8" />

          <path className="branch-path" opacity="0" d="M 415 378 Q 370 350 320 310" strokeWidth="6" />
          <path className="branch-path" opacity="0" d="M 588 350 Q 630 330 670 280" strokeWidth="6" />
          <path className="branch-path" opacity="0" d="M 460 300 Q 420 260 370 200" strokeWidth="5" />
          <path className="branch-path" opacity="0" d="M 550 270 Q 590 220 630 160" strokeWidth="5" />
          <path className="branch-path" opacity="0" d="M 480 280 Q 490 220 470 150" strokeWidth="4" />
          <path className="branch-path" opacity="0" d="M 520 280 Q 530 210 560 140" strokeWidth="4" />
        </g>

        <g className="foliage-group">
          {heartsData.map((heart) => (
            <g 
              key={heart.id} 
              className="foliage-heart"
              data-x={heart.x}
              data-y={heart.y}
              data-rotation={heart.rotation}
              data-target-scale={heart.scale}
            >
              <path d={HeartPath} fill={heart.color} />
            </g>
          ))}
        </g>

        <g className="floating-group">
          {[...Array(25)].map((_, i) => (
            <g 
              key={`float-${i}`} 
              className="float-heart"
              data-x={300 + Math.random() * 400} // Spread across the wider canopy
              data-y={100 + Math.random() * 300}
              data-rotation={(Math.random() - 0.5) * 45}
              data-scale={0.4 + Math.random() * 0.4}
            >
              <path d={HeartPath} fill={['#FF7A92', '#FF9FAD', '#FFC2CB', '#F4425A'][i % 4]} />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
});
