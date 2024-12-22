import { EnergyChart } from "@/components/EnergyChart";
import { SavingsResult } from "@/components/SavingsResult";
import { useLocation, useNavigate } from "react-router-dom";
import { TopNav } from "@/components/TopNav";
import { Card, CardContent } from "@/components/ui/card";

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
    <div className="min-h-screen bg-[#F1F0FB] flex flex-col">
      <TopNav />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Your Energy Savings Overview</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-6">
              <SavingsResult formData={formData} onReset={handleReset} />
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-[#1A1F2C]">Usage Overview</h2>
              <div className="bg-white rounded-lg">
                <EnergyChart />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};