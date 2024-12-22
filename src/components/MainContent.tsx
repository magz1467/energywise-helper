import { EnergyForm } from "./EnergyForm";
import { Recommendations } from "./Recommendations";
import { TrustedInstallers } from "./TrustedInstallers";

export const MainContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
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