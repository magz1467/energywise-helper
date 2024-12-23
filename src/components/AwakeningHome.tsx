export const AwakeningHome = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] text-[#221F26]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#E5DEFF]/20 to-transparent rounded-3xl"></div>
            <img 
              src="/lovable-uploads/240fc7bf-14e0-47f8-a402-d66b3f268312.png" 
              alt="Smart home control interface showing energy monitoring"
              className="max-w-[400px] rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};