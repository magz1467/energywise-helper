import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const EnergyForm = () => {
  const [formData, setFormData] = useState({
    electricityUsage: "",
    gasUsage: "",
    homeSize: "",
    occupants: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Data submitted successfully!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="electricityUsage">Monthly Electricity Usage (kWh)</Label>
          <Input
            id="electricityUsage"
            name="electricityUsage"
            type="number"
            placeholder="e.g. 900"
            value={formData.electricityUsage}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gasUsage">Monthly Gas Usage (therms)</Label>
          <Input
            id="gasUsage"
            name="gasUsage"
            type="number"
            placeholder="e.g. 50"
            value={formData.gasUsage}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="homeSize">Home Size (sq ft)</Label>
          <Input
            id="homeSize"
            name="homeSize"
            type="number"
            placeholder="e.g. 2000"
            value={formData.homeSize}
            onChange={handleChange}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupants">Number of Occupants</Label>
          <Input
            id="occupants"
            name="occupants"
            type="number"
            placeholder="e.g. 4"
            value={formData.occupants}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full">Submit Energy Data</Button>
      </form>
    </Card>
  );
};