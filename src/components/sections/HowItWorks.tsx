import { Card } from "@/components/ui/card";
import { UserPlus, Search, Briefcase, ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register on EarlyJobs Vizag Portal",
      description: "Create your profile in minutes. Upload your resume, add your skills, and tell us about your career aspirations. Our platform is designed specifically for Visakhapatnam's job market.",
      color: "bg-primary"
    },
    {
      icon: Search,
      title: "Get Matched with Local Opportunities",
      description: "Our smart algorithm connects you with relevant jobs, internships, and skill-building programs in Vizag. From IT companies in HITEC City to opportunities at the port and hospitality sector.",
      color: "bg-secondary"
    },
    {
      icon: Briefcase,
      title: "Attend Interviews & Get Placed",
      description: "Participate in our regular interview drives, walk-in sessions, and campus recruitment programs. We provide interview preparation, skill assessment, and continued support until you land your dream job.",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            How EarlyJobs Vizag Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting started with your career journey in Visakhapatnam is simple. 
            Follow these three easy steps to unlock opportunities in your city.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 h-full hover:shadow-warm transition-spring border-0 bg-white">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-secondary mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};