import { Separator } from "./ui/separator";

export const TrustMarkers = () => {
  const partners = [
    {
      name: "Nationwide Building Society",
      logo: "/lovable-uploads/ab7d1299-8dfd-4554-9e89-78f3b4f31d17.png",
      alt: "Nationwide Building Society Logo"
    },
    {
      name: "Santander",
      logo: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/santander.png",
      alt: "Santander Logo"
    },
    {
      name: "The Times",
      logo: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/times.png",
      alt: "The Times Logo"
    },
    {
      name: "Cotswold District Council",
      logo: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/cotswold.png",
      alt: "Cotswold District Council Logo"
    },
    {
      name: "MCS",
      logo: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/mcs.png",
      alt: "MCS Logo"
    },
    {
      name: "Checkatrade",
      logo: "https://pub-3626123a908346a7a8be8d9295f44e26.r2.dev/checkatrade.png",
      alt: "Checkatrade Logo"
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">Working In Partnership With</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="w-32 h-16 flex items-center justify-center">
            <img
              src={partner.logo}
              alt={partner.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};