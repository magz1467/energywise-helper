import { TopNav } from "@/components/TopNav";
import { HeroSection } from "@/components/HeroSection";
import { MainContent } from "@/components/MainContent";
import { Recommendations } from "@/components/Recommendations";
import { TrustedInstallers } from "@/components/TrustedInstallers";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <div className="container mx-auto px-4 flex-grow">
        <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm mb-8">
          <HeroSection />
          <MainContent />
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
            <Recommendations />
          </div>
        </div>

        <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8">
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

        <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">How AI Can Help You Save Money</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Compare Your Usage",
                description: "See how your energy consumption compares to similar households in your area"
              },
              {
                step: 2,
                title: "Identify High Usage",
                description: "Discover which devices are consuming the most energy in your home"
              },
              {
                step: 3,
                title: "Smart Automations",
                description: "Create automated schedules to reduce energy usage during inactive periods"
              },
              {
                step: 4,
                title: "Smart Device Integration",
                description: "Receive intelligent prompts to optimize your connected devices' energy consumption"
              }
            ].map((item) => (
              <div key={item.step} className="text-center p-6 bg-primary/5 rounded-lg">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <TrustedInstallers />

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

        <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Meet the Team</h2>
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <Avatar className="h-32 w-32 mb-4">
              <AvatarImage src="https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/scientist.png" alt="Our Team" />
              <AvatarFallback>Team</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold mb-2">Our Expert Team</h3>
            <p className="text-gray-600 mb-4">Dedicated Energy Specialists</p>
            <p className="text-center text-gray-700 max-w-lg">
              Our team consists of experienced environmental engineers, data scientists, and sustainability experts who are passionate about making energy efficiency accessible to everyone. With decades of combined experience in energy optimization and environmental science, we work together to provide you with accurate, actionable insights for reducing your energy consumption.
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-white/90 backdrop-blur-sm mt-16 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Terms & Conditions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">GDPR Compliance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Help Centre</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">FAQs</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Customer Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Complaints</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">123 Energy Street</li>
                <li className="text-gray-600">London, EC1A 1BB</li>
                <li className="text-gray-600">United Kingdom</li>
                <li><a href="tel:+44-20-1234-5678" className="text-gray-600 hover:text-primary">+44 20 1234 5678</a></li>
                <li><a href="mailto:support@energywise.co.uk" className="text-gray-600 hover:text-primary">support@energywise.co.uk</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm">© 2024 EnergyWise Helper. All rights reserved. Registered in England and Wales (Company No. 12345678)</p>
              <div className="mt-4 md:mt-0">
                <p className="text-gray-600 text-sm">Regulated by <a href="#" className="hover:text-primary">Ofgem</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
