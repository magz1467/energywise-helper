import { CircleDollarSign, Star, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="mb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          <span className="text-primary">The smarter way</span> to save energy
        </h1>
        
        <div className="flex flex-row gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm sm:text-base">£1456 average annual saving</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm sm:text-base">Over 12000 installations</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm sm:text-base">4.7 Trustpilot</span>
          </div>
        </div>
      </div>
    </div>
  );
};