import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { FORM_STEPS } from "./EnergyFormSteps";
import { FormData } from "@/types/energy-form";

export const EnergyForm = () => {
  const navigate = useNavigate();
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    electricityUsage: "",
    gasUsage: "",
    homeSize: "",
    occupants: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const currentStep = FORM_STEPS.find(s => s.field === name);
    
    if (!currentStep) return;
    
    // Allow empty string for clearing input
    if (value === "") {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
      return;
    }
    
    // For number fields, only allow numeric input
    if (currentStep.type === "number") {
      if (!/^\d*\.?\d*$/.test(value)) return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    const currentField = FORM_STEPS[step - 1].field;
    if (!formData[currentField]) {
      toast.error("Please fill in this field before continuing");
      return;
    }
    
    if (step < FORM_STEPS.length) {
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

  const currentStep = FORM_STEPS[step - 1];

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
          {FORM_STEPS.map((_, index) => (
            <div
              key={index}
              className={`h-2 flex-1 mx-1 rounded ${
                index + 1 <= step ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-center text-muted-foreground">
          Step {step} of {FORM_STEPS.length}
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
            value={formData[currentStep.field]}
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
            {step === FORM_STEPS.length ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
