import { EnergyForm } from "./EnergyForm";
import { TrustedInstallers } from "./TrustedInstallers";
import { RegisterInterest } from "./RegisterInterest";
import { Separator } from "./ui/separator";
import { TrustMarkers } from "./TrustMarkers";

export const MainContent = () => {
  return (
    <div className="container mx-auto space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get Your Personalised Energy Savings Quote</h2>
          <EnergyForm />
        </div>
        <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/c14727a7-dbff-419d-b8f1-313c9edbd2c5.png" 
            alt="Professional electrician installing smart home devices" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <TrustMarkers />
      
      <Separator className="my-8 sm:my-12" />
      
      <TrustedInstallers />
      <RegisterInterest />
    </div>
  );
};