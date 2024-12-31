import { EnergyForm } from "./EnergyForm";

export const HeroBlock = () => {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="h-full w-full">
          <div className="relative h-full">
            {/* Right Image - Positioned absolutely */}
            <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
              <img
                src="lovable-uploads/485e774d-2031-4b4e-a25e-2d8b36777f6b.png"
                alt="Professional Electrician"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Content Container */}
        <div className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
          {/* Left Content - Limited width */}
          <div className="w-full max-w-xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary block">The smarter way</span>
                to save energy
              </h1>
              
              <p className="text-lg text-gray-600">
                Join thousands of homeowners who are saving money and reducing their carbon footprint with our energy-saving solutions.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Best savings guarantee</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Trusted by thousands of homeowners</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">100+ energy-saving solutions</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <EnergyForm />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image - Only visible on small screens */}
      <div className="relative w-full h-[300px] lg:hidden mt-8">
        <img
          src="lovable-uploads/485e774d-2031-4b4e-a25e-2d8b36777f6b.png"
          alt="Professional Electrician"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};