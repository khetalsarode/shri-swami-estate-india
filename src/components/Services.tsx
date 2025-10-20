import { Card } from "@/components/ui/card";
import { Sprout, Factory, ShieldCheck, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sprout,
      title: "Estate Agents For Agricultural Land",
      type: "Real Estate",
      purpose: "To facilitate sale/purchase of farmland",
      features: "Market value guidance, documentation",
      description:
        "Estate Agents for Agricultural Land specialize in facilitating the buying and selling of farmland and agricultural properties. They possess in-depth knowledge of the agricultural market, local land regulations, and zoning laws, ensuring clients make informed decisions. These professionals assist landowners in valuing their properties accurately and marketing them effectively to attract potential buyers. They also guide investors looking to purchase agricultural land, offering insights into land use, soil quality, and potential returns on investment. Their expertise helps streamline transactions, making the process efficient and beneficial for all parties involved.",
      gradient: "from-accent/10 to-accent/5",
    },
    {
      icon: Factory,
      title: "Estate Agents For Industrial Spaces",
      type: "Real Estate Services",
      purpose: "Help lease/sell industrial properties",
      features: "Site visits, legal due diligence, deal negotiation",
      description:
        "Estate Agents for Industrial Spaces specialize in facilitating the buying, selling, and leasing of industrial properties such as warehouses, manufacturing units, and distribution centers. They possess in-depth knowledge of the industrial real estate market, including local zoning laws and market trends, ensuring clients make informed decisions. These agents cater to a diverse clientele, including manufacturers, logistics companies, and investors, providing tailored solutions to meet specific operational needs. Their expertise helps streamline transactions and maximize property value.",
      gradient: "from-primary/10 to-primary/5",
    },
    {
      icon: ShieldCheck,
      title: "Property Verification Services",
      type: "Legal & Due Diligence",
      purpose: "Validate property authenticity and legality",
      features: "Title checks, ownership history, compliance verification",
      description:
        "Property Verification Services are essential for individuals and businesses looking to validate the authenticity and legality of real estate properties. These services typically include thorough checks on property titles, ownership history, land use, and compliance with local regulations. By employing expert investigators and utilizing advanced tools, property verification helps mitigate risks associated with fraudulent transactions and disputes. Whether you're buying, selling, or leasing, ensuring that a property is legitimate can save time, money, and legal headaches in the long run.",
      gradient: "from-secondary/10 to-secondary/5",
    },
    {
      icon: Building,
      title: "Society Conveyance Services",
      type: "Residential Services",
      purpose: "Facilitate society management and conveyance",
      features: "Documentation, legal support, registration assistance",
      description:
        "Society Conveyance Services are essential for managing the transportation needs of residential communities. These services facilitate the smooth movement of residents and their belongings within and outside the society premises. They include shuttle services, pick-up and drop-off arrangements, and transportation for events. By ensuring timely and safe conveyance, these services enhance the overall living experience in societies, promote convenience, and foster a sense of community. Whether for daily commuting or special occasions, Society Conveyance Services prioritize the comfort and satisfaction of residents.",
      gradient: "from-accent/10 to-primary/5",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">Type:</span>
                  <span className="text-sm text-muted-foreground">{service.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">Purpose:</span>
                  <span className="text-sm text-muted-foreground">{service.purpose}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-primary">Features:</span>
                  <span className="text-sm text-muted-foreground">{service.features}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
