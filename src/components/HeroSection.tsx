import { CircleDollarSign, Star, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="mb-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
          <span className="text-primary">The smarter way</span> to save energy
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <div className="flex items-center gap-2 justify-start">
            <CircleDollarSign className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm sm:text-base">£1456 average annual saving</span>
          </div>
          <div className="flex items-center gap-2 justify-start">
            <Users className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm sm:text-base">Over 12000 installations</span>
          </div>
          <div className="flex items-center gap-2 justify-start">
            <Star className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm sm:text-base">4.7 Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  );
};