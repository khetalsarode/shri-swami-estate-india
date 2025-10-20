import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to find your perfect property? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Visit Us</h3>
            <p className="text-muted-foreground">
              Nilgiri 26 New Bhagwan Nager,<br />
              Ramanand Road, Jalgaon Bazar,<br />
              Jalgaon - 425001<br />
              (Near Kilbil School)
            </p>
          </Card>

          <Card className="p-8 text-center bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Call Us</h3>
            <a 
              href="tel:9422626478" 
              className="text-muted-foreground hover:text-primary transition-colors block mb-3"
            >
              +91 9422626478
            </a>
            <Button 
              asChild
              className="bg-gradient-primary hover:opacity-90"
            >
              <a href="tel:9422626478">Call Now</a>
            </Button>
          </Card>

          <Card className="p-8 text-center bg-gradient-card shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Email Us</h3>
            <a 
              href="mailto:mcbhole4@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors block mb-3 break-all"
            >
              mcbhole4@gmail.com
            </a>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="mailto:mcbhole4@gmail.com">Send Email</a>
            </Button>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="p-12 max-w-3xl mx-auto bg-gradient-primary text-primary-foreground shadow-large">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Real Estate Journey?</h3>
            <p className="text-lg mb-8 opacity-90">
              Whether you're buying agricultural land, leasing industrial space, or need property verification, we're here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                asChild
                className="bg-secondary hover:bg-secondary-hover text-secondary-foreground shadow-medium"
              >
                <a href="tel:9422626478">Schedule a Consultation</a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                asChild
                className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <a href="mailto:mcbhole4@gmail.com">Email Inquiry</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
