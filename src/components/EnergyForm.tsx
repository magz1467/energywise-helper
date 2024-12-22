import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SavingsResult } from "./SavingsResult";

export const EnergyForm = () => {
  const [step, setStep] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    electricityUsage: "",
    gasUsage: "",
    homeSize: "",
    occupants: "",
    email: "",
  });

  const steps = [
    {
      title: "Monthly Electricity Usage",
      field: "electricityUsage",
      label: "What's your monthly electricity usage in kWh?",
      placeholder: "e.g. 900",
      type: "number",
    },
    {
      title: "Monthly Gas Usage",
      field: "gasUsage",
      label: "What's your monthly gas usage in therms?",
      placeholder: "e.g. 50",
      type: "number",
    },
    {
      title: "Home Size",
      field: "homeSize",
      label: "What's the size of your home in square feet?",
      placeholder: "e.g. 2000",
      type: "number",
    },
    {
      title: "Occupants",
      field: "occupants",
      label: "How many people live in your home?",
      placeholder: "e.g. 4",
      type: "number",
    },
    {
      title: "Email Address",
      field: "email",
      label: "What's your email address?",
      placeholder: "your@email.com",
      type: "email",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    const currentField = steps[step - 1].field;
    if (!formData[currentField as keyof typeof formData]) {
      toast.error("Please fill in this field before continuing");
      return;
    }
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  if (showResults) {
    return <SavingsResult formData={formData} />;
  }

  const currentStep = steps[step - 1];

  return (
    <Card className="p-6">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 mx-1 rounded ${
                index + 1 <= step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-center text-muted-foreground">
          Step {step} of {steps.length}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor={currentStep.field}>{currentStep.label}</Label>
          <Input
            id={currentStep.field}
            name={currentStep.field}
            type={currentStep.type}
            placeholder={currentStep.placeholder}
            value={formData[currentStep.field as keyof typeof formData]}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-between gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className="w-full"
          >
            Previous
          </Button>
          <Button
            type="button"
            onClick={nextStep}
            className="w-full"
          >
            {step === steps.length ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </Card>
  );
};