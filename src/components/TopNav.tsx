import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LightbulbIcon, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm mb-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="py-2 flex items-center hover:opacity-80 transition-opacity">
          <LightbulbIcon 
            className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-2 sm:mr-3" 
            strokeWidth={2.5} 
          />
          <span className="text-lg sm:text-xl font-bold text-primary">EnergyWise</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="font-medium">Energy Savings</div>
                    <div className="text-sm text-muted-foreground">
                      Track and optimize your home energy usage
                    </div>
                    <div className="font-medium">Smart Automation</div>
                    <div className="text-sm text-muted-foreground">
                      Automate your energy savings with AI
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <div className="font-medium">FAQ</div>
                    <div className="text-sm text-muted-foreground">
                      Common questions about our service
                    </div>
                    <div className="font-medium">About Us</div>
                    <div className="text-sm text-muted-foreground">
                      Meet our team of experts
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-4 pt-8">
                <h2 className="text-lg font-semibold mb-2">Features</h2>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">Energy Savings</div>
                    <div className="text-sm text-muted-foreground">
                      Track and optimize your home energy usage
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Smart Automation</div>
                    <div className="text-sm text-muted-foreground">
                      Automate your energy savings with AI
                    </div>
                  </div>
                </div>

                <h2 className="text-lg font-semibold mt-6 mb-2">Resources</h2>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium">FAQ</div>
                    <div className="text-sm text-muted-foreground">
                      Common questions about our service
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">About Us</div>
                    <div className="text-sm text-muted-foreground">
                      Meet our team of experts
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};