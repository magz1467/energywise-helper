export interface FormData {
  electricityUsage: string;
  gasUsage: string;
  homeSize: string;
  occupants: string;
  email: string;
}

export interface ValidationRules {
  min: number;
  max: number;
}

export interface FormStep {
  title: string;
  field: keyof FormData;
  label: string;
  placeholder: string;
  type: string;
  hint: string;
  validation?: ValidationRules;
}