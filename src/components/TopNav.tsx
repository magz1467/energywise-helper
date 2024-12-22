import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LightbulbIcon } from "lucide-react";

export const TopNav = () => {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm mb-8 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="py-4 flex items-center">
          <LightbulbIcon 
            className="h-10 w-10 text-primary mr-3" 
            strokeWidth={2.5} 
          />
          <span className="text-xl font-bold text-primary">EnergyWise</span>
        </div>
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
    </nav>
  );
};