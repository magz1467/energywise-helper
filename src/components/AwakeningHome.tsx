export const AwakeningHome = () => {
  return (
    <div className="py-12 bg-[#00B8E6] text-white">
      <div className="grid grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            Awaken your home
          </h2>
          <p className="text-xl">
            Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-semibold">2900+</span> smart home integrations
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Local control</span> for your privacy
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Real-time monitoring</span> of your energy usage
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/240fc7bf-14e0-47f8-a402-d66b3f268312.png" 
            alt="Home Assistant mobile interface showing smart home controls"
            className="max-w-[400px] rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};