import { EnergyForm } from "./EnergyForm";
import { TrustedInstallers } from "./TrustedInstallers";
import { RegisterInterest } from "./RegisterInterest";
import { Separator } from "./ui/separator";
import { TrustMarkers } from "./TrustMarkers";

export const MainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Get Your Personalised Energy Savings Quote</h2>
          <EnergyForm />
        </div>
        <div className="lg:w-1/2">
          <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/c14727a7-dbff-419d-b8f1-313c9edbd2c5.png" 
              alt="Professional electrician installing smart home devices" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <TrustMarkers />
      
      <Separator className="my-8 sm:my-12" />
      
      <TrustedInstallers />
      <RegisterInterest />
    </div>
  );
};