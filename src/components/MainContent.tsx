import { EnergyForm } from "./EnergyForm";
import { TrustedInstallers } from "./TrustedInstallers";
import { RegisterInterest } from "./RegisterInterest";
import { Separator } from "./ui/separator";

export const MainContent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Get Your Personalised Energy Savings Quote</h2>
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

      <Separator className="my-12" />
      
      <TrustedInstallers />
      <RegisterInterest />
    </div>
  );
};