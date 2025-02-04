import { EnergyForm } from "./EnergyForm";

export const HeroBlock = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Column */}
      <div className="w-full md:w-1/2 p-8">
        <div className="max-w-xl space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-primary block">The smarter way</span>
              to save energy
            </h1>
          </div>

          <div className="grid gap-1.5">
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

      {/* Right Column - Hidden on mobile, visible from md breakpoint up */}
      <div className="hidden md:block w-1/2 p-4">
        <div className="h-[70%] w-[70%] mx-auto rounded-3xl overflow-hidden">
          <img
            src="lovable-uploads/485e774d-2031-4b4e-a25e-2d8b36777f6b.png"
            alt="Professional Electrician"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};