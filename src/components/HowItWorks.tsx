export const HowItWorks = () => {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8 mt-32">
      <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            step: 1,
            title: "Enter your home data",
            description: "Provide information about your energy usage and home details"
          },
          {
            step: 2,
            title: "See your savings",
            description: "Get a detailed analysis of potential energy savings"
          },
          {
            step: 3,
            title: "Get recommended measures",
            description: "Receive personalized energy-saving recommendations"
          },
          {
            step: 4,
            title: "Start saving",
            description: "Implement the suggestions to reduce your energy consumption"
          }
        ].map((item) => (
          <div key={item.step} className="text-center p-4">
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