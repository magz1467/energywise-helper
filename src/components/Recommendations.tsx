import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const recommendations = [
  "Install LED light bulbs throughout your home",
  "Use a programmable thermostat",
  "Seal air leaks around windows and doors",
  "Regular HVAC maintenance",
  "Use energy-efficient appliances",
];

export const Recommendations = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Energy Saving Tips</h3>
      <ul className="space-y-3">
        {recommendations.map((tip, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
            <span>{tip}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};