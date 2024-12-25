import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";
import UKCoverageMap from "./UKCoverageMap";

export const TrustedInstallers = () => {
  const installers = [
    {
      name: "Installer One",
      image: "https://example.com/installer1.png",
      rating: 4,
      reviews: 120,
      location: "London",
    },
    {
      name: "Installer Two",
      image: "https://example.com/installer2.png",
      rating: 5,
      reviews: 95,
      location: "Manchester",
    },
    {
      name: "Installer Three",
      image: "https://example.com/installer3.png",
      rating: 3,
      reviews: 50,
      location: "Birmingham",
    },
    {
      name: "Installer Four",
      image: "https://example.com/installer4.png",
      rating: 4,
      reviews: 80,
      location: "Liverpool",
    },
    {
      name: "Installer Five",
      image: "https://example.com/installer5.png",
      rating: 5,
      reviews: 200,
      location: "Leeds",
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Our Trusted Installers</h2>
      <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto px-4">
        Our nationwide network of certified installers is carefully vetted and continuously monitored through our review-driven system. With over 500 trusted professionals across the UK, we ensure quality service delivery and customer satisfaction.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8 px-4">
        {/* Left column - Installer Cards */}
        <div className="flex-1 space-y-4 overflow-visible">
          {installers.map((installer) => (
            <Card key={installer.name} className="p-4 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 flex-shrink-0">
                  <AvatarImage src={installer.image} alt={installer.name} />
                  <AvatarFallback>{installer.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{installer.name}</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < installer.rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      ({installer.reviews} reviews)
                    </span>
                  </div>
                </div>
                <span className="text-sm text-gray-500 flex-shrink-0">{installer.location}</span>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Right column - Map and Quality Assurance */}
        <div className="hidden lg:flex flex-1 flex-col gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 h-[300px]">
            <UKCoverageMap />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">Our Quality Assurance</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                All installers are MCS certified
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Regular performance monitoring
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Customer satisfaction guaranteed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};