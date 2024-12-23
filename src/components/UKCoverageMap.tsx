import React from 'react';

const UKCoverageMap = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-white">
      <svg
        viewBox="0 0 500 800"
        className="h-full w-auto mx-auto"
        fill="#E5E7EB"
        stroke="#34D399"
        strokeWidth="2"
      >
        {/* Main UK landmass */}
        <path d="M200,600 L220,580 L240,560 L260,540 L280,520 L300,500 L320,480 L340,460 L360,440 L380,420 L400,400 L380,380 L360,360 L340,340 L320,320 L300,300 L280,280 L260,260 L240,240 L220,220 L200,200 L180,180 L160,160 L140,140 L120,160 L100,180 L80,200 L100,220 L120,240 L140,260 L160,280 L180,300 L160,320 L140,340 L120,360 L100,380 L120,400 L140,420 L160,440 L180,460 L200,480 L180,500 L160,520 L140,540 L160,560 L180,580 L200,600Z" />
        
        {/* Scotland */}
        <path d="M180,180 L200,160 L220,140 L240,120 L260,100 L240,80 L220,60 L200,40 L180,60 L160,80 L140,100 L120,120 L140,140 L160,160 L180,180Z" />
        
        {/* Northern Ireland */}
        <path d="M80,300 L100,280 L120,260 L100,240 L80,260 L60,280 L80,300Z" />
        
        {/* Highlight circle for middle England */}
        <circle cx="220" cy="400" r="80" fill="#34D399" fillOpacity="0.2" stroke="none" />
      </svg>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default UKCoverageMap;