export const AiSavings = () => {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">How AI Can Help You Save Money</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            step: 1,
            title: "Compare Your Usage",
            description: "See how your energy consumption compares to similar households in your area"
          },
          {
            step: 2,
            title: "Identify High Usage",
            description: "Discover which devices are consuming the most energy in your home"
          },
          {
            step: 3,
            title: "Smart Automations",
            description: "Create automated schedules to reduce energy usage during inactive periods"
          },
          {
            step: 4,
            title: "Smart Device Integration",
            description: "Receive intelligent prompts to optimize your connected devices' energy consumption"
          }
        ].map((item) => (
          <div key={item.step} className="text-center p-6 bg-primary/5 rounded-lg">
            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
              {item.step}
            </div>
            <h3 className="font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};