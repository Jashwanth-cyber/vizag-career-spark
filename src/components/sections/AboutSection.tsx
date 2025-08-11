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

        
      </div>
    </section>
  );
};