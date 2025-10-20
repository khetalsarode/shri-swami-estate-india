import { Building2, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Shri Swami Samarth Estate" className="h-16 w-16 object-contain" />
            <div>
              <h1 className="text-xl font-bold text-primary">Shri Swami Samarth Estate</h1>
              <p className="text-xs text-muted-foreground">Your Trusted Real Estate Partner</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <Button 
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
