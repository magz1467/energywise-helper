export const AwakeningHome = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] text-[#221F26] rounded-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Smart home installation for UK homes
          </h2>
          <p className="text-xl text-[#403E43]">
            Professional smart home installation service that puts you in control. Our certified UK electricians ensure safe, compliant, and reliable smart home setups.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">NICEIC certified</span> installers across the UK
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Part P compliant</span> electrical work
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Energy monitoring</span> built to UK standards
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#E5DEFF]/20 to-transparent rounded-[2rem]"></div>
            <div className="relative max-w-[400px] rounded-[2rem] overflow-hidden shadow-lg border-8 border-white">
              <div className="absolute inset-0 bg-[#4C9EEB] rounded-t-2xl h-24"></div>
              <img 
                src="/lovable-uploads/2b2155bd-b2aa-4194-bd72-ca9c31e2e286.png" 
                alt="Smart home control interface showing room controls and energy monitoring"
                className="relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};