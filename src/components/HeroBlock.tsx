import { EnergyForm } from "./EnergyForm";

export const HeroBlock = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white/90 p-8 rounded-lg backdrop-blur-sm mb-8 relative">
      <div className="lg:w-1/2 lg:pr-8">
        <h1 className="text-4xl font-bold mb-6">
          <span className="text-primary">The smarter way</span> to save energy
        </h1>
        <div className="mb-8">
          <div className="flex flex-col gap-4 mb-6">
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
        </div>
        <EnergyForm />
      </div>
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="/lovable-uploads/485e774d-2031-4b4e-a25e-2d8b36777f6b.png"
          alt="Professional Electrician"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};