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
      
      <div className="mb-8">
        <UKCoverageMap />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {installers.map((installer) => (
          <Card key={installer.name} className="overflow-hidden">
            <img
              src={installer.image}
              alt={installer.name}
              className="w-full h-40 sm:h-48 object-cover"
              loading="lazy"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{installer.name}</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Rating: {installer.rating}</p>
                <p>{installer.reviews} verified reviews</p>
                <p>Area: {installer.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          Every installer in our network:
        </p>
        <ul className="text-gray-600 space-y-2 text-sm sm:text-base">
          <li>✓ Is fully certified and insured</li>
          <li>✓ Undergoes regular quality assessments</li>
          <li>✓ Maintains a minimum 4.5/5 customer rating</li>
          <li>✓ Provides detailed documentation and aftercare</li>
        </ul>
      </div>
    </div>
  );
};