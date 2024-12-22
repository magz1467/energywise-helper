import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", currentUsage: 900, projectedUsage: 630 },
  { name: "Feb", currentUsage: 850, projectedUsage: 595 },
  { name: "Mar", currentUsage: 800, projectedUsage: 560 },
  { name: "Apr", currentUsage: 750, projectedUsage: 525 },
  { name: "May", currentUsage: 700, projectedUsage: 490 },
  { name: "Jun", currentUsage: 800, projectedUsage: 560 },
];

export const EnergyChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Energy Usage Comparison</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="currentUsage" name="Current Usage" fill="#FEC6A1" />
            <Bar dataKey="projectedUsage" name="With Savings" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};