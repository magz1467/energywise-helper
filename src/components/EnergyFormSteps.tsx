import { FormStep } from "@/types/energy-form";

export const FORM_STEPS: FormStep[] = [
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