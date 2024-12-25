import { EnergyForm } from "./EnergyForm";
import { TrustedInstallers } from "./TrustedInstallers";
import { RegisterInterest } from "./RegisterInterest";
import { Separator } from "./ui/separator";
import { TrustMarkers } from "./TrustMarkers";
import { AwakeningHome } from "./AwakeningHome";

export const MainContent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <EnergyForm />
        </div>

        <TrustMarkers />
        
        <div className="py-4 sm:py-8">
          <AwakeningHome />
        </div>
        
        <Separator className="my-6 sm:my-8" />
        
        <div className="bg-gradient-to-br from-[#F6F6F7] to-[#E5DEFF] rounded-2xl sm:rounded-3xl p-6 sm:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#221F26]">
              The UK's Most Reliable Home Energy Company
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#403E43] mb-6 sm:mb-8">
              As the UK transitions towards smarter, more efficient energy solutions, we're at the forefront of implementing cutting-edge technology to help households reduce their energy consumption.
            </p>
            <div className="grid gap-4 sm:gap-8 sm:grid-cols-2">
              <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left">
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">Advanced Technology</h3>
                <p className="text-sm sm:text-base text-[#403E43]">
                  From AI-powered smart meters to intelligent heating controls, we bring the latest energy-saving innovations directly to your home, helping you stay ahead of rising energy costs.
                </p>
              </div>
              <div className="bg-white/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-left">
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">Expert Implementation</h3>
                <p className="text-sm sm:text-base text-[#403E43]">
                  Our team of specialists combines deep technical knowledge with practical experience to ensure your home energy systems are optimized for maximum efficiency and savings.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <TrustedInstallers />
        <RegisterInterest />
      </div>
    </div>
  );
};
