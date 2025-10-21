import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import farmland from "@/assets/farmland.jpg";
import industrialFacility from "@/assets/industrial-facility.jpg";
import residentialPlots from "@/assets/residential-plots.jpg";
import propertyVerification from "@/assets/property-verification.jpg";
import shopForSell from "@/assets/shop-for-sell.jpg";
import shopForRent from "@/assets/shop-for-rent.jpg";
import flatForSell from "@/assets/flat-for-sell.jpg";
import flatForRent from "@/assets/flat-for-rent.jpg";
import bungalowForSell from "@/assets/bungalow-for-sell.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    { src: farmland, title: "Agricultural Farmland" },
    { src: industrialFacility, title: "Industrial Spaces" },
    { src: residentialPlots, title: "Residential Plots" },
    { src: propertyVerification, title: "Property Verification" },
    { src: shopForSell, title: "Shop for Sale" },
    { src: shopForRent, title: "Shop for Rent" },
    { src: flatForSell, title: "Flat for Sale" },
    { src: flatForRent, title: "Flat for Rent" },
    { src: bungalowForSell, title: "Bungalow for Sale" },
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
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in drop-shadow-lg">
            Your Trusted Partner in Real Estate
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-8 animate-fade-in drop-shadow-md" style={{ animationDelay: "0.2s" }}>
            Specializing in Agricultural Land, Industrial Spaces, and a wide range of property services in Jalgaon and the surrounding region.
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
              className="bg-background/90 backdrop-blur-sm border-primary text-foreground hover:bg-background"
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
