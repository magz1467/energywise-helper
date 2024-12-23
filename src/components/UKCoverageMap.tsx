import React from 'react';

const UKCoverageMap = () => {
  return (
    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-white">
      <img 
        src="/lovable-uploads/99b5c16c-bd49-4c4b-9158-4a38068fc2ab.png"
        alt="UK Coverage Map"
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default UKCoverageMap;