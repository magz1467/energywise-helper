import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8">
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
  );
};