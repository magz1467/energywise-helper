import { EnergyForm } from "@/components/EnergyForm";
import { EnergyChart } from "@/components/EnergyChart";
import { Recommendations } from "@/components/Recommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Home Energy Manager</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get Your Personalised Savings</h2>
            <EnergyForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Usage Overview</h2>
            <EnergyChart />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <Recommendations />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
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
      </div>
    </div>
  );
};

export default Index;