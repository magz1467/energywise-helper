import { CircleDollarSign, Star, Users } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="mb-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-primary">The smarter way</span> to save energy
        </h1>
        
        <div className="flex flex-wrap gap-6 mb-4">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="h-5 w-5 text-primary" />
            <span>£1456 average annual saving</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Over 12000 installations</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            <span>4.7 Trustpilot</span>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground mb-6">
          Smarter home energy savings without the hassle. Join thousands of homeowners and start saving on your energy bills today.
        </p>
      </div>
    </div>
  );
};