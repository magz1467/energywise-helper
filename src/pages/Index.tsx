import { TopNav } from "@/components/TopNav";
import { HeroBlock } from "@/components/HeroBlock";
import { HowItWorks } from "@/components/HowItWorks";
import { AiSavings } from "@/components/AiSavings";
import { Faq } from "@/components/Faq";
import { TrustedInstallers } from "@/components/TrustedInstallers";
import { RegisterInterest } from "@/components/RegisterInterest";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />

      <div className="container mx-auto px-4 flex-grow">
        <HeroBlock />
        <HowItWorks />
        <AiSavings />
        <Faq />

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

        <TrustedInstallers />
        <RegisterInterest />
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
