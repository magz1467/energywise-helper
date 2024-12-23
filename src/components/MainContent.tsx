import { EnergyForm } from "./EnergyForm";
import { TrustedInstallers } from "./TrustedInstallers";
import { RegisterInterest } from "./RegisterInterest";
import { Separator } from "./ui/separator";
import { TrustMarkers } from "./TrustMarkers";
import { AwakeningHome } from "./AwakeningHome";

export const MainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get Your Personalised Energy Savings Quote</h2>
          <EnergyForm />
        </div>
        <div>
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
      
      <AwakeningHome />
      
      <Separator className="my-8 sm:my-12" />
      
      <div className="bg-gradient-to-br from-[#F6F6F7] to-[#E5DEFF] rounded-3xl p-12 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#221F26]">
            The UK's Most Reliable Home Energy Company
          </h2>
          <p className="text-lg md:text-xl text-[#403E43] mb-8">
            As the UK transitions towards smarter, more efficient energy solutions, we're at the forefront of implementing cutting-edge technology to help households reduce their energy consumption.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-2xl p-6 text-left">
              <h3 className="font-semibold text-xl mb-3">Advanced Technology</h3>
              <p className="text-[#403E43]">
                From AI-powered smart meters to intelligent heating controls, we bring the latest energy-saving innovations directly to your home, helping you stay ahead of rising energy costs.
              </p>
            </div>
            <div className="bg-white/80 rounded-2xl p-6 text-left">
              <h3 className="font-semibold text-xl mb-3">Expert Implementation</h3>
              <p className="text-[#403E43]">
                Our team of specialists combines deep technical knowledge with practical experience to ensure your home energy systems are optimized for maximum efficiency and savings.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <TrustedInstallers />
      <RegisterInterest />
    </div>
  );
};