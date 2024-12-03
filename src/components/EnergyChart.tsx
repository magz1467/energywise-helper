import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", usage: 900 },
  { name: "Feb", usage: 850 },
  { name: "Mar", usage: 800 },
  { name: "Apr", usage: 750 },
  { name: "May", usage: 700 },
  { name: "Jun", usage: 800 },
];

export const EnergyChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Energy Usage Trend</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="usage" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};