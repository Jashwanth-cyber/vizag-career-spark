import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Developer",
      company: "Tech Solutions Pvt Ltd, HITEC City",
      content: "EarlyJobs Vizag helped me land my first job right after graduation from GITAM. The team understood my skills and connected me with the perfect company. The interview preparation sessions were really helpful!",
      rating: 5,
      location: "Visakhapatnam"
    },
    {
      name: "Rajesh Kumar",
      role: "Marine Engineer",
      company: "Vizag Port Trust",
      content: "As someone from a non-tech background, I was worried about finding good opportunities in Vizag. EarlyJobs not only found me a position at the port but also helped me with skill development courses. Excellent local support!",
      rating: 5,
      location: "Visakhapatnam"
    },
    {
      name: "Dr. Vasantha Reddy",
      role: "Placement Officer",
      company: "Andhra University College of Engineering",
      content: "EarlyJobs has been an excellent partner for our college placements. They bring quality companies to our campus and provide excellent support to our students. Our placement statistics have improved significantly since partnering with them.",
      rating: 5,
      location: "Visakhapatnam"
    },
    {
      name: "Madhavi Devi",
      role: "HR Manager",
      company: "Coastal Paradise Resorts",
      content: "Finding skilled professionals for the hospitality sector in Vizag was challenging until we partnered with EarlyJobs. They understand our local requirements and consistently provide quality candidates.",
      rating: 5,
      location: "Visakhapatnam"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Success Stories from Visakhapatnam
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from students, professionals, colleges, and employers who have experienced 
            success with EarlyJobs Visakhapatnam. These are real stories from our local community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-warm transition-spring border-0 bg-white relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              {/* Author Info */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground bg-accent px-3 py-1 rounded-full">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-secondary text-center mb-8">
            Our Impact in Visakhapatnam
          </h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Students Placed</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Company Partners</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">College Partnerships</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">85%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};