import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Check, DollarSign, Home, LoaderCircle } from "lucide-react";

interface SavingsResultProps {
  formData: {
    electricityUsage: string;
    gasUsage: string;
    homeSize: string;
    occupants: string;
    email: string;
  };
}

export const SavingsResult = ({ formData }: SavingsResultProps) => {
  const [progress, setProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setShowResults(true);
        }, 500);
      }, 1500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const calculateSavings = () => {
    const electricity = parseFloat(formData.electricityUsage);
    const gas = parseFloat(formData.gasUsage);
    const size = parseFloat(formData.homeSize);

    return {
      smartThermostat: Math.round((electricity + gas) * 0.12),
      smartLighting: Math.round(electricity * 0.15),
      solarPanels: Math.round(electricity * 0.3),
      homeAutomation: Math.round((electricity + gas) * 0.08),
    };
  };

  const savings = calculateSavings();

  if (!showResults) {
    return (
      <Card className="p-8 max-w-2xl mx-auto">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center mb-4">
            <LoaderCircle className="animate-spin h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-semibold">Calculating Your Savings</h2>
          <Progress value={progress} className="w-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>Accurate Calculations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4 text-primary" />
              <span>Save Money</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Home className="h-4 w-4 text-primary" />
              <span>Stress Free Install</span>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Potential Annual Savings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-primary/5 rounded-lg">
          <h3 className="font-semibold mb-2">Smart Thermostat</h3>
          <p className="text-2xl font-bold text-primary">£{savings.smartThermostat}</p>
          <p className="text-sm text-muted-foreground">Per Year</p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <h3 className="font-semibold mb-2">Smart Lighting</h3>
          <p className="text-2xl font-bold text-primary">£{savings.smartLighting}</p>
          <p className="text-sm text-muted-foreground">Per Year</p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <h3 className="font-semibold mb-2">Solar Panels</h3>
          <p className="text-2xl font-bold text-primary">£{savings.solarPanels}</p>
          <p className="text-sm text-muted-foreground">Per Year</p>
        </div>
        <div className="p-4 bg-primary/5 rounded-lg">
          <h3 className="font-semibold mb-2">Home Automation</h3>
          <p className="text-2xl font-bold text-primary">£{savings.homeAutomation}</p>
          <p className="text-sm text-muted-foreground">Per Year</p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg font-semibold">
          Total Potential Savings: £
          {Object.values(savings).reduce((a, b) => a + b, 0)} per year
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          We've sent these calculations to {formData.email}
        </p>
      </div>
    </Card>
  );
};