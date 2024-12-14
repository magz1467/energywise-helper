import { Card, CardContent } from "@/components/ui/card";

export const TrustedInstallers = () => {
  const installers = [
    {
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      name: "James Wilson",
      rating: "4.9/5",
      reviews: "127",
      location: "Manchester"
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      name: "Sarah Thompson",
      rating: "4.8/5",
      reviews: "98",
      location: "London"
    },
    {
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      name: "David Clark",
      rating: "4.9/5",
      reviews: "156",
      location: "Birmingham"
    }
  ];

  return (
    <div className="bg-white/90 rounded-lg shadow-lg backdrop-blur-sm p-8 mb-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Trusted Installers</h2>
      <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto">
        Our nationwide network of certified installers is carefully vetted and continuously monitored through our review-driven system. With over 500 trusted professionals across the UK, we ensure quality service delivery and customer satisfaction.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {installers.map((installer) => (
          <Card key={installer.name} className="overflow-hidden">
            <img
              src={installer.image}
              alt={installer.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{installer.name}</h3>
              <div className="text-sm text-gray-600">
                <p>Rating: {installer.rating}</p>
                <p>{installer.reviews} verified reviews</p>
                <p>Area: {installer.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-4">
          Every installer in our network:
        </p>
        <ul className="text-gray-600 space-y-2">
          <li>✓ Is fully certified and insured</li>
          <li>✓ Undergoes regular quality assessments</li>
          <li>✓ Maintains a minimum 4.5/5 customer rating</li>
          <li>✓ Provides detailed documentation and aftercare</li>
        </ul>
      </div>
    </div>
  );
};