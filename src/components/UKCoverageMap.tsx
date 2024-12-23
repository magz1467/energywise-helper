import React from 'react';

const UKCoverageMap = () => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden bg-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/lovable-uploads/uk-map-placeholder.svg" 
          alt="UK Coverage Map" 
          className="h-full w-auto object-contain"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-emerald-400/20 rounded-full animate-ping" />
          <div className="absolute inset-0 w-32 h-32 bg-emerald-400/40 rounded-full" />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10" />
    </div>
  );
};

export default UKCoverageMap;