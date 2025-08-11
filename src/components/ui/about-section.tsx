import { Card } from "@/components/ui/card";
import { Building2, Users, Award, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            About EarlyJobs Visakhapatnam
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            EarlyJobs is India's leading tech-enabled recruitment franchise, and our Visakhapatnam chapter 
            is dedicated to bridging the gap between local talent and exceptional career opportunities. 
            We understand Vizag's unique ecosystem—from the bustling IT-SEZ corridors to the maritime 
            industries at the port, from prestigious educational institutions to emerging hospitality ventures.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is simple: <strong>Connect. Develop. Succeed.</strong> We're not just a job portal; 
            we're your career partners, helping students and professionals in Visakhapatnam discover 
            their potential and build meaningful careers right here in our beautiful coastal city.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-warm transition-spring">
            <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">50+</div>
            <p className="text-muted-foreground">Partner Companies</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-spring">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
            <p className="text-muted-foreground">Successful Placements</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-spring">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <p className="text-muted-foreground">College Partnerships</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-spring">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <div className="text-3xl font-bold text-secondary mb-2">100%</div>
            <p className="text-muted-foreground">Local Focus</p>
          </Card>
        </div>

        {/* Industry Focus */}
        <div className="bg-warm rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
            Industries We Serve in Vizag
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-secondary mb-2">IT & Software</h4>
              <p className="text-sm text-muted-foreground">HITEC City, Software Companies, Startups</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-secondary mb-2">Port & Maritime</h4>
              <p className="text-sm text-muted-foreground">Visakhapatnam Port, Shipping, Logistics</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-secondary mb-2">Hospitality</h4>
              <p className="text-sm text-muted-foreground">Hotels, Tourism, Beach Resorts</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-secondary mb-2">Education</h4>
              <p className="text-sm text-muted-foreground">Universities, Training Centers, EdTech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};