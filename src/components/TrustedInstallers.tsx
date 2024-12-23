import { Card, CardContent } from "@/components/ui/card";
import UKCoverageMap from "./UKCoverageMap";

export const TrustedInstallers = () => {
  const installers = [
    {
      image: "/lovable-uploads/6dc454d9-0b6c-4979-9875-c4b19bbede77.png",
      name: "James Wilson",
      rating: "4.9/5",
      reviews: "127",
      location: "Manchester"
    },
    {
      image: "/lovable-uploads/889fe454-44c3-409d-b5c4-7c3b5bfbbeca.png",
      name: "Sarah Thompson",
      rating: "4.8/5",
      reviews: "98",
      location: "London"
    },
    {
      image: "/lovable-uploads/04653bcb-d8ba-48b5-baa5-5fd6bde6a218.png",
      name: "David Clark",
      rating: "4.9/5",
      reviews: "156",
      location: "Birmingham"
    }
  ];

  return (
    <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-4 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Our Trusted Installers</h2>
      <p className="text-center text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
        Our nationwide network of certified installers is carefully vetted and continuously monitored through our review-driven system. With over 500 trusted professionals across the UK, we ensure quality service delivery and customer satisfaction.
      </p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column - Installer Cards */}
        <div className="flex-1 space-y-4">
          {installers.map((installer) => (
            <Card key={installer.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center p-2">
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                  <img
                    src={installer.image}
                    alt={installer.name}
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <CardContent className="p-4 flex-1">
                  <h3 className="font-semibold text-lg mb-2">{installer.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1">{installer.rating}</span>
                      <span className="ml-2">({installer.reviews} reviews)</span>
                    </p>
                    <p>Based in {installer.location}</p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Right column - Map and Quality Assurance */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <UKCoverageMap />
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4">Quality Assurance</h3>
            <div className="space-y-3">
              <p className="text-gray-700 font-medium">
                Every installer in our network meets our strict standards:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Is fully certified and insured
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Undergoes regular quality assessments
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Maintains a minimum 4.5/5 customer rating
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Provides detailed documentation and aftercare
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};