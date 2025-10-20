import { Building2 } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shri Swami Samarth Estate" className="h-16 w-16 object-contain" />
              <div>
                <h3 className="text-xl font-bold">Shri Swami Samarth Estate</h3>
              </div>
            </div>
            <p className="text-background/80 text-sm">
              Your trusted partner in real estate solutions across Jalgaon and its surrounding areas. Specializing in agricultural land, industrial spaces, and property services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-background/80 hover:text-background transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>Nilgiri 26 New Bhagwan Nager</li>
              <li>Ramanand Road, Jalgaon - 425001</li>
              <li>Phone: +91 9422626478</li>
              <li>Email: mcbhole4@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Shri Swami Samarth Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
