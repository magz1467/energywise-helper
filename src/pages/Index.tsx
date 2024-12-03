import { EnergyForm } from "@/components/EnergyForm";
import { EnergyChart } from "@/components/EnergyChart";
import { Recommendations } from "@/components/Recommendations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Home Energy Manager</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get Your Personalised Savings</h2>
            <EnergyForm />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Usage Overview</h2>
            <EnergyChart />
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <Recommendations />
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Enter your home data",
                description: "Provide information about your energy usage and home details"
              },
              {
                step: 2,
                title: "See your savings",
                description: "Get a detailed analysis of potential energy savings"
              },
              {
                step: 3,
                title: "Get recommended measures",
                description: "Receive personalized energy-saving recommendations"
              },
              {
                step: 4,
                title: "Start saving",
                description: "Implement the suggestions to reduce your energy consumption"
              }
            ].map((item) => (
              <div key={item.step} className="text-center p-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How accurate are your energy savings calculations?</AccordionTrigger>
              <AccordionContent>
                Our calculations are based on industry-standard energy consumption models and real-world data. We typically achieve 85-90% accuracy when comparing predicted to actual savings, though results may vary based on individual usage patterns and environmental factors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What data do you use to generate the savings estimates?</AccordionTrigger>
              <AccordionContent>
                We analyze your provided energy usage data, home size, number of occupants, and current energy rates. This is combined with regional climate data and typical energy consumption patterns to create personalized estimates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How often should I update my energy consumption data?</AccordionTrigger>
              <AccordionContent>
                For the most accurate predictions, we recommend updating your data monthly. This helps account for seasonal variations and changes in usage patterns, ensuring our recommendations remain relevant and accurate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can the actual savings differ from the predicted amounts?</AccordionTrigger>
              <AccordionContent>
                Yes, actual savings can vary based on factors such as weather conditions, changes in energy usage patterns, and how thoroughly recommendations are implemented. Our estimates are based on typical scenarios, but individual results may differ.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Index;