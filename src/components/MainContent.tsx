import { EnergyForm } from "./EnergyForm";
import { TrustedInstallers } from "./TrustedInstallers";
import { RegisterInterest } from "./RegisterInterest";
import { Separator } from "./ui/separator";
import { TrustMarkers } from "./TrustMarkers";

export const MainContent = () => {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="order-2 lg:order-1">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Get Your Personalised Energy Savings Quote</h2>
          </div>
          <EnergyForm />
        </div>
        <div className="order-1 lg:order-2">
          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
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