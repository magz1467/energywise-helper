import { FormStep } from "@/types/energy-form";
import { toast } from "sonner";

export const validateNumberInput = (value: string, step: FormStep): boolean => {
  if (step.type === "number" && step.validation) {
    const numValue = Number(value);
    if (numValue < step.validation.min) {
      toast.error(`Value must be at least ${step.validation.min}`);
      return false;
    }
    if (numValue > step.validation.max) {
      toast.error(`Value must be less than ${step.validation.max}`);
      return false;
    }
  }
  return true;
};