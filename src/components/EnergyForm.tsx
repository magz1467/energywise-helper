import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const EnergyForm = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(1);
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
      placeholder: "Average UK household: 242 kWh/month",
      type: "number",
      hint: "The average UK household uses around 242 kWh per month",
      validation: {
        min: 50,
        max: 1000,
      }
    },
    {
      title: "Monthly Gas Usage",
      field: "gasUsage",
      label: "What's your monthly gas usage in kWh?",
      placeholder: "Average UK household: 1000 kWh/month",
      type: "number",
      hint: "The average UK household uses around 1000 kWh of gas per month",
      validation: {
        min: 200,
        max: 2500,
      }
    },
    {
      title: "Home Size",
      field: "homeSize",
      label: "What's the size of your home in square feet?",
      placeholder: "Average UK home: 818 sq ft",
      type: "number",
      hint: "The average UK home is 818 square feet",
      validation: {
        min: 200,
        max: 5000,
      }
    },
    {
      title: "Occupants",
      field: "occupants",
      label: "How many people live in your home?",
      placeholder: "Average UK household: 2.4 people",
      type: "number",
      hint: "The average UK household has 2.4 people",
      validation: {
        min: 1,
        max: 10,
      }
    },
    {
      title: "Email Address",
      field: "email",
      label: "What's your email address?",
      placeholder: "your@email.com",
      type: "email",
      hint: "We'll send your personalized savings report here",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const currentStep = steps.find(step => step.field === name);
    
    if (type === "number" && currentStep?.validation) {
      const numValue = Number(value);
      if (numValue < currentStep.validation.min) {
        toast.error(`Value must be at least ${currentStep.validation.min}`);
        return;
      }
      if (numValue > currentStep.validation.max) {
        toast.error(`Value must be less than ${currentStep.validation.max}`);
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
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
    navigate("/savings-overview", { state: { formData } });
  };

  const currentStep = steps[step - 1];

  if (!started) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Ready to Start Saving?</h3>
        <p className="text-muted-foreground mb-6">
          Answer a few quick questions about your energy usage to get your personalized savings plan.
        </p>
        <Button 
          onClick={() => setStarted(true)}
          size="lg"
          className="w-full md:w-auto"
        >
          Start Now
        </Button>
      </Card>
    );
  }

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
          {currentStep.hint && (
            <p className="text-sm text-muted-foreground">{currentStep.hint}</p>
          )}
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