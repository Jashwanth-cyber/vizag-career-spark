import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">EarlyJobs Visakhapatnam</h3>
            <p className="text-secondary-light leading-relaxed mb-6">
              India's leading tech-enabled recruitment franchise, empowering Vizag's youth with 
              career opportunities across IT, Maritime, Hospitality, and Education sectors. 
              Building bridges between talent and opportunity in our beautiful coastal city.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">+91-9999-123-456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">vizag@earlyjobs.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">Monday - Saturday: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-light">
              <li><a href="#about" className="hover:text-primary transition-smooth">About EarlyJobs Vizag</a></li>
              <li><a href="#services" className="hover:text-primary transition-smooth">Our Services</a></li>
              <li><a href="#events" className="hover:text-primary transition-smooth">Upcoming Events</a></li>
              <li><a href="#register" className="hover:text-primary transition-smooth">Register Now</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Success Stories</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-light">
              <li><a href="#" className="hover:text-primary transition-smooth">Job Placement</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Campus Recruitment</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Skill Development</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Career Counseling</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Industry Training</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Resume Building</a></li>
            </ul>
          </div>
        </div>

        {/* Industries & Social Links */}
        <div className="grid md:grid-cols-2 gap-8 py-8 border-t border-secondary-light/20">
          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Industries We Serve</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">IT & Software</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Maritime</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Hospitality</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Education</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Healthcare</span>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Banking</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-spring">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-spring">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-spring">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-spring">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-secondary-light text-sm mt-4">
              Stay connected for the latest job opportunities, events, and career tips in Visakhapatnam.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-light text-sm">
              © 2024 EarlyJobs Visakhapatnam. All rights reserved. | 
              <span className="text-primary"> Empowering Vizag's Youth Since 2020</span>
            </div>
            <div className="flex gap-6 text-secondary-light text-sm">
              <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-smooth">Sitemap</a>
            </div>
          </div>
          
          {/* Local Keywords for SEO */}
          <div className="mt-6 text-xs text-secondary-light/60 text-center">
            <p>
              Recruitment franchise in Visakhapatnam | Jobs for students in Vizag | Internships in Vizag | 
              Campus placements Vizag | Local job portal Vizag | Hiring solutions in Visakhapatnam | 
              EarlyJobs Andhra Pradesh | Career opportunities Vishakhapatnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};