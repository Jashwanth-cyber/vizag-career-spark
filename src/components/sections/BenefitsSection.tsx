import { Card } from "@/components/ui/card";
import { GraduationCap, Building, Users, CheckCircle } from "lucide-react";

export const BenefitsSection = () => {
  const studentBenefits = [
    "Verified local jobs & internship opportunities",
    "Skill-building workshops & certification programs",
    "Regular walk-in interview drives in Vizag",
    "Career guidance & resume building support",
    "Direct connection with hiring managers",
    "Industry-specific training programs"
  ];

  const collegeBenefits = [
    "Enhanced placement statistics & outcomes",
    "Industry partnerships & guest lecture programs",
    "Customized recruitment drives for your students",
    "Faculty development & industry connect programs",
    "Alumni network building & engagement",
    "Campus-to-corporate transition support"
  ];

  const companyBenefits = [
    "Access to pre-vetted local talent pool",
    "Quick hiring process & reduced recruitment time",
    "Cost-effective recruitment solutions",
    "Campus recruitment support & coordination",
    "Skill assessment & candidate screening",
    "Local market insights & hiring trends"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Benefits for Everyone in the Vizag Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a student seeking opportunities, a college looking to improve placements, 
            or a company searching for talent, EarlyJobs Visakhapatnam has solutions tailored for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* For Students */}
          <Card className="p-8 hover:shadow-warm transition-spring border-l-4 border-l-primary">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">For Students</h3>
              <p className="text-muted-foreground">Kickstart your career journey in Vizag</p>
            </div>
            
            <ul className="space-y-3">
              {studentBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* For Colleges */}
          <Card className="p-8 hover:shadow-warm transition-spring border-l-4 border-l-secondary">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-secondary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">For Colleges</h3>
              <p className="text-muted-foreground">Boost your placement success rates</p>
            </div>
            
            <ul className="space-y-3">
              {collegeBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* For Companies */}
          <Card className="p-8 hover:shadow-warm transition-spring border-l-4 border-l-primary">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">For Companies</h3>
              <p className="text-muted-foreground">Find the right talent quickly</p>
            </div>
            
            <ul className="space-y-3">
              {companyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-warm rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Ready to Transform Your Career Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful professionals who started their journey with EarlyJobs Visakhapatnam. 
              Your dream career is just a registration away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">


             
              <button 
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-glow transition-spring shadow-soft"
              
                
                onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Register Now


             
              </button>
              <button className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-spring shadow-soft">
                Schedule a Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};