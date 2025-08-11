import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Users, ChevronRight } from "lucide-react";

export const EventsSection = () => {
  const upcomingEvents = [
    {
      title: "Mega Job Fair 2024 - Vizag",
      date: "December 15, 2024",
      time: "10:00 AM - 5:00 PM",
      location: "VUDA Convention Center, MVP Colony",
      companies: "25+ Companies",
      positions: "200+ Open Positions",
      description: "Join us for the biggest job fair in Visakhapatnam featuring top companies from IT, Maritime, and Hospitality sectors.",
      category: "Job Fair",
      featured: true
    },
    {
      title: "Campus Recruitment Drive - GITAM",
      date: "December 18, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "GITAM University Campus",
      companies: "12+ Companies",
      positions: "80+ Positions",
      description: "Exclusive recruitment drive for GITAM students across all streams with focus on fresher-friendly roles.",
      category: "Campus Drive"
    },
    {
      title: "Skill Development Workshop",
      date: "December 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "EarlyJobs Vizag Office, Dwaraka Nagar",
      companies: "Industry Experts",
      positions: "Free Workshop",
      description: "Learn in-demand skills like Digital Marketing, Data Analysis, and Communication Skills from industry experts.",
      category: "Workshop"
    },
    {
      title: "Walk-in Interview - IT Companies",
      date: "December 28, 2024",
      time: "10:30 AM - 3:00 PM",
      location: "HITEC City, Madhurawada",
      companies: "8+ IT Companies",
      positions: "50+ Positions",
      description: "Direct walk-in interviews for software developers, testers, and support roles. No prior registration required.",
      category: "Walk-in"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Job Fair": return "bg-primary text-white";
      case "Campus Drive": return "bg-secondary text-white";
      case "Workshop": return "bg-accent text-accent-foreground";
      case "Walk-in": return "bg-warm text-warm-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Upcoming Events in Visakhapatnam
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest job fairs, campus recruitment drives, workshops, 
            and walk-in interview opportunities happening in Vizag. Mark your calendar!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className={`p-6 hover:shadow-warm transition-spring border-0 bg-white ${event.featured ? 'ring-2 ring-primary' : ''}`}>
              {event.featured && (
                <div className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Featured Event
                </div>
              )}
              
              {/* Category Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(event.category)}`}>
                {event.category}
              </div>
              
              {/* Event Title */}
              <h3 className="text-xl font-bold text-secondary mb-3">{event.title}</h3>
              
              {/* Event Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex gap-4 mb-4">
                <div className="flex items-center gap-1 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-medium">{event.companies}</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <ChevronRight className="w-4 h-4 text-secondary" />
                  <span className="font-medium">{event.positions}</span>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {event.description}
              </p>
              
              {/* Action Button */}
              <Button 
                className={`w-full ${event.featured ? 'bg-primary hover:bg-primary-glow' : 'bg-secondary hover:bg-secondary/90'} text-white transition-spring`}
              >
                {event.category === "Workshop" ? "Register for Workshop" : "Register for Event"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Never Miss an Opportunity
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get notified about upcoming events, job opportunities, 
              and career development programs in Visakhapatnam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
              />
              <Button className="bg-primary hover:bg-primary-glow text-white px-6 py-3 transition-spring">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 1000+ professionals already subscribed to our updates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};