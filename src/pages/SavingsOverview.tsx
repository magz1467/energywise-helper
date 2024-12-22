import { EnergyChart } from "@/components/EnergyChart";
import { SavingsResult } from "@/components/SavingsResult";
import { useLocation, useNavigate } from "react-router-dom";
import { TopNav } from "@/components/TopNav";

export const SavingsOverview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  if (!formData) {
    navigate("/");
    return null;
  }

  const handleReset = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#F2FCE2] flex flex-col">
      <TopNav />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SavingsResult formData={formData} onReset={handleReset} />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Usage Overview</h2>
            <EnergyChart />
          </div>
        </div>
      </div>
    </div>
  );
};