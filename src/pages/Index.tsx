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
      </div>
    </div>
  );
};

export default Index;