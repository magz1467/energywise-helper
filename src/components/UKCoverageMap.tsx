import React from 'react';

const UKCoverageMap = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-white">
      <svg
        viewBox="0 0 400 600"
        className="h-full w-auto mx-auto"
        fill="#E5E7EB"
        stroke="#34D399"
        strokeWidth="2"
      >
        {/* Main UK landmass */}
        <path d="M150,400 L170,380 L190,360 L210,340 L230,320 L250,300 L270,280 L290,260 L310,240 L330,220 L350,200 L330,180 L310,160 L290,140 L270,120 L250,100 L230,80 L210,60 L190,40 L170,20 L150,0 L130,20 L110,40 L90,60 L70,80 L50,100 L70,120 L90,140 L110,160 L130,180 L110,200 L90,220 L70,240 L50,260 L70,280 L90,300 L110,320 L130,340 L150,360 L130,380 L110,400 L90,420 L110,440 L130,460 L150,400Z" />
        
        {/* Scotland */}
        <path d="M130,20 L150,0 L170,20 L190,40 L210,60 L190,80 L170,100 L150,120 L130,100 L110,80 L90,60 L70,40 L90,20 L110,0 L130,20Z" />
        
        {/* Northern Ireland */}
        <path d="M30,200 L50,180 L70,160 L50,140 L30,160 L10,180 L30,200Z" />
        
        {/* Highlight circle for middle England */}
        <circle cx="170" cy="200" r="60" fill="#34D399" fillOpacity="0.2" stroke="none" />
      </svg>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default UKCoverageMap;