import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import agriculturalLand from "@/assets/agricultural-land.jpg";
import industrialSpace from "@/assets/industrial-space.jpg";
import propertyVerification from "@/assets/property-verification.jpg";
import societyConveyance from "@/assets/society-conveyance.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: agriculturalLand, title: "Agricultural Land" },
    { src: industrialSpace, title: "Industrial Spaces" },
    { src: propertyVerification, title: "Property Verification" },
    { src: societyConveyance, title: "Society Conveyance" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Your Trusted Partner in Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Specializing in Agricultural Land, Industrial Spaces, Property Verification, and Society Conveyance Services in Jalgaon
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-large"
            >
              Contact Us Today
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all ${
              currentImage === index ? "w-8 bg-secondary" : "w-2 bg-primary-foreground/50"
            }`}
            aria-label={`View ${images[index].title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
