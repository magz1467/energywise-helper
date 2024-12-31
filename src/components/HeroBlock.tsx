import { EnergyForm } from "./EnergyForm";

export const HeroBlock = () => {
  return (
    <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm mb-8 relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block z-0">
        <img
          src="/lovable-uploads/485e774d-2031-4b4e-a25e-2d8b36777f6b.png"
          alt="Professional Electrician"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10">
        <EnergyForm />
      </div>
    </div>
  );
};