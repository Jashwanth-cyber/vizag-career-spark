import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/vizag-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Visakhapatnam skyline with students and professionals"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Visakhapatnam, Andhra Pradesh
            </div>
            
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Empowering Visakhapatnam's
                <span className="block text-primary-light">Youth & Vidya</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium opacity-90">
                Your Career Journey Starts Here, Right in Vizag
              </p>
            </div>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl opacity-80 max-w-2xl leading-relaxed">
              Connecting Vizag's brightest talent with top employers across IT-SEZ, 
              Port Industries, Hospitality & Education sectors. Build skills, find opportunities, 
              and grow your <em>udyogam</em> (career) with EarlyJobs Visakhapatnam.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-primary-light hover:text-white shadow-warm transition-spring text-lg px-8 py-6">
                Register Now - Free
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary transition-spring text-lg px-8 py-6"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Today
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm">500+ Vizag Placements</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm">50+ Partner Companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm">15+ Local Colleges</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Quick Registration Card */}
          <div className="lg:block hidden">
            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-warm border-0">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">Quick Registration</h3>
                  <p className="text-muted-foreground">Join the EarlyJobs Vizag network today</p>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth">
                      <option>I am a...</option>
                      <option>Student</option>
                      <option>Recent Graduate</option>
                      <option>Job Seeker</option>
                      <option>College Representative</option>
                      <option>Employer</option>
                    </select>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-glow text-white py-3 text-lg font-semibold transition-spring">
                    Join EarlyJobs Vizag Network
                  </Button>
                </form>
                
                <p className="text-sm text-muted-foreground text-center">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-float">
        <div className="w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm"></div>
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-white/15 rounded-full backdrop-blur-sm"></div>
      </div>
    </section>
  );
};