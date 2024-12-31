import { EnergyForm } from "./EnergyForm";

export const HeroBlock = () => {
  return (
    <div className="relative bg-white/90 rounded-lg backdrop-blur-sm mb-8">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Content Column */}
          <div className="p-8 space-y-8">
            <h1 className="text-4xl font-bold">
              <span className="text-primary">The smarter way</span> to save energy
            </h1>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Best savings guarantee</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <span>Trusted by thousands of homeowners</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-2 rounded-full">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span>100+ energy-saving solutions</span>
              </div>
            </div>

            <div className="w-full">
              <EnergyForm />
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative h-full">
            <div className="absolute inset-0 lg:relative lg:h-[calc(100%+4rem)] lg:-my-8 lg:-mr-8">
              <img
                src="lovable-uploads/485e774d-2031-4b4e-a25e-2d8b36777f6b.png"
                alt="Professional Electrician"
                className="w-full h-full object-cover rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};