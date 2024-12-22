import { Separator } from "./ui/separator";

export const TrustMarkers = () => {
  const partners = [
    {
      name: "Checkatrade",
      logo: "/lovable-uploads/134bad42-c67a-4304-9068-b0d809e52475.png",
      alt: "Checkatrade Approved Member Logo"
    },
    {
      name: "ECS",
      logo: "/lovable-uploads/f3cd811c-ddd7-44f2-af1d-b4c99ad7635f.png",
      alt: "ECS Electrical Compliance and Safety Logo"
    },
    {
      name: "Electrical Safety Register",
      logo: "/lovable-uploads/04b78de5-1629-4ee2-92db-3c4f62713cc7.png",
      alt: "Electrical Safety Register Logo"
    },
    {
      name: "Electrical Compliance Certificate",
      logo: "/lovable-uploads/581597e0-24e8-426c-8adf-83c9cd42f0a3.png",
      alt: "Electrical Compliance Certificate Logo"
    },
    {
      name: "Home Assistant",
      logo: "/lovable-uploads/68b6ad92-de19-4a38-9f45-26d0995d5c35.png",
      alt: "Home Assistant Logo"
    },
    {
      name: "Trustatrader",
      logo: "/lovable-uploads/0e5cc3e3-ad32-40d3-93a0-176e7e479973.png",
      alt: "Trustatrader Trusted Traders Logo"
    }
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold text-center mb-8">Accredited By</h2>
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