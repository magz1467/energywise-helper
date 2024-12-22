import { EnergyForm } from "./EnergyForm";
import { Recommendations } from "./Recommendations";
import { TrustedInstallers } from "./TrustedInstallers";

export const MainContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Get Your Personalised Energy Savings Quote</h2>
          <p className="text-muted-foreground mb-4">
            Enter your energy usage details to see how much you could save in seconds.
          </p>
        </div>
        <EnergyForm />
      </div>
      <div>
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/c14727a7-dbff-419d-b8f1-313c9edbd2c5.png" 
            alt="Professional electrician installing smart home devices" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};