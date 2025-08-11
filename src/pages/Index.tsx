import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Star, Building2, Users, Award, UserPlus, Search, Briefcase, ArrowRight, Calendar, Clock, ChevronRight, GraduationCap, CheckCircle, ChevronDown, ChevronUp, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import heroImage from "@/assets/vizag-hero.jpg";
import successIcon from "@/assets/success-icon.png";

const Index = () => {
  // Registration Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    skills: '',
    industry: '',
    city: 'Visakhapatnam'
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // FAQ State
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Event Handlers
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Data
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
    }
  ];

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

  const faqs = [
    {
      question: "What services does EarlyJobs Visakhapatnam offer?",
      answer: "We provide comprehensive recruitment solutions including job placements, internships, skill development programs, campus recruitment drives, and career counseling specifically for the Visakhapatnam region. Our services connect local talent with opportunities across IT-SEZ, maritime, hospitality, and education sectors."
    },
    {
      question: "Is there any registration fee to join EarlyJobs Vizag?",
      answer: "No, registration is completely free for job seekers and students. We believe in accessible career opportunities for everyone in Visakhapatnam. Our revenue comes from our employer partners, not from candidates."
    },
    {
      question: "Which companies hire through EarlyJobs in Vizag?",
      answer: "We partner with 50+ companies ranging from IT firms in HITEC City, port and logistics companies, hotels and resorts, banks, retail chains, and educational institutions. Our partners include both established corporates and growing startups in the Vizag ecosystem."
    },
    {
      question: "Do you provide training and skill development programs?",
      answer: "Yes! We conduct regular workshops on communication skills, technical training, interview preparation, resume building, and industry-specific certification programs. All training is designed considering the local job market requirements in Visakhapatnam."
    },
    {
      question: "How often do you conduct walk-in interviews in Vizag?",
      answer: "We organize walk-in interview drives at least twice a month at various locations across Visakhapatnam including MVP Colony, Dwaraka Nagar, and Gajuwaka. We also conduct special campus drives at colleges like GITAM, Andhra University, and other institutions."
    },
    {
      question: "Can final year students register for placements?",
      answer: "Absolutely! We encourage final year students to register early. This gives us time to understand your career goals, provide relevant training, and connect you with suitable opportunities before graduation. Early registration often leads to pre-placement offers."
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Visakhapatnam skyline with students and professionals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="text-center">
            <div className="text-white space-y-8">
              {/* Location Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <MapPin className="w-4 h-4" />
                Visakhapatnam, Andhra Pradesh
              </div>
              
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  Empowering Visakhapatnam's
                  <span className="block text-primary-light">Youth & Vidya</span>
                </h1>
                <p className="text-xl md:text-2xl font-medium opacity-90">
                  Your Career Journey Starts Here, Right in Vizag
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-lg md:text-xl">
                  Connecting Vizag's brightest talent with top employers across IT-SEZ,
                  Port Industries, Hospitality & Education sectors. Build skills, find opportunities,
                  and grow your <em>udyogam</em> (career) with EarlyJobs Visakhapatnam.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-800 text-white hover:bg-white hover:text-orange-600 shadow-warm transition-spring text-lg px-8 py-6"
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Register Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-orange-600 bg-white hover:bg-orange-800 hover:text-white border-0 transition-spring text-lg px-8 py-6"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Today
                </Button>
              </div>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap gap-6 pt-4 justify-center text-white">
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
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Benefits Section */}
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
                  <Building2 className="w-8 h-8 text-secondary" />
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

      {/* How It Works */}
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

      {/* Registration Form */}
      <section id="register" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="text-center bg-white p-8 rounded-2xl shadow-soft">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img src={successIcon} alt="Success" className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-secondary mb-4">Registration Successful!</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Welcome to the EarlyJobs Visakhapatnam network! Our team will contact you within 24 hours to discuss your career goals and upcoming opportunities.
                </p>
                <div className="bg-gradient-warm p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-secondary mb-3">What's Next?</h3>
                  <ul className="text-left space-y-2 text-muted-foreground">
                    <li>✓ Profile verification & skills assessment</li>
                    <li>✓ Job matching based on your preferences</li>
                    <li>✓ Interview preparation support</li>
                    <li>✓ Regular updates on opportunities in Vizag</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-2xl shadow-soft">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-secondary mb-4">Join EarlyJobs Visakhapatnam Network</h2>
                  <p className="text-lg text-muted-foreground">
                    Start your career journey with Vizag's most trusted recruitment partner
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="role">I am a... *</Label>
                      <select
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      >
                        <option value="">Select your role</option>
                        <option value="student">Current Student</option>
                        <option value="graduate">Recent Graduate</option>
                        <option value="jobseeker">Job Seeker</option>
                        <option value="employer">Employer/HR</option>
                        <option value="college">College Representative</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="experience">Experience Level</Label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      >
                        <option value="">Select experience</option>
                        <option value="fresher">Fresher (0 years)</option>
                        <option value="0-1">0-1 years</option>
                        <option value="1-3">1-3 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="5+">5+ years</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        readOnly
                        className="mt-2 bg-muted"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="industry">Preferred Industry</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    >
                      <option value="">Select preferred industry</option>
                      <option value="it">Information Technology</option>
                      <option value="maritime">Maritime & Shipping</option>
                      <option value="hospitality">Hospitality & Tourism</option>
                      <option value="education">Education & Training</option>
                      <option value="banking">Banking & Finance</option>
                      <option value="retail">Retail & Consumer Goods</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="skills">Key Skills (Optional)</Label>
                    <textarea
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-2 w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                      placeholder="List your key skills, technologies, or areas of expertise..."
                    />
                  </div>
                  
                  <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                    <div className="text-muted-foreground mb-2">
                      <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload Resume (Optional)
                    </div>
                    <p className="text-sm text-muted-foreground">PDF, DOC, DOCX up to 5MB</p>
                    <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    <Button type="button" variant="outline" className="mt-2" onClick={() => (document.querySelector('input[type="file"]') as HTMLInputElement)?.click()}>
                      Choose File
                    </Button>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary-glow text-white py-3 text-lg font-semibold transition-spring"
                  >
                    {loading ? 'Registering...' : 'Join EarlyJobs Vizag Network'}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    By registering, you agree to our Terms of Service and Privacy Policy. 
                    We're committed to protecting your privacy and helping you find the right opportunities.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Events Section */}
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

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Got questions? We've got answers. Here are the most common questions about EarlyJobs Visakhapatnam.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 hover:shadow-warm transition-spring">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <h3 className="text-lg font-semibold text-secondary pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
            
            {/* Contact Information */}
            <div className="mt-16 bg-gradient-warm rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-secondary mb-4">Still Have Questions?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our team is here to help you succeed. Reach out to us anytime!
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-primary mb-2" />
                  <p className="font-semibold text-secondary">Call Us</p>
                  <p className="text-muted-foreground">+91 99999 88888</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-primary mb-2" />
                  <p className="font-semibold text-secondary">Email Us</p>
                  <p className="text-muted-foreground">vizag@earlyjobs.in</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <MapPin className="w-8 h-8 text-primary mb-2" />
                  <p className="font-semibold text-secondary">Visit Us</p>
                  <p className="text-muted-foreground">MVP Colony, Vizag</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">EarlyJobs Visakhapatnam</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering Vizag's youth with career opportunities and professional growth. 
                We're your trusted partner in building a successful career right here in 
                the beautiful coastal city of Visakhapatnam.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">
                    Office: MVP Colony, Sector 3, Visakhapatnam - 530017, Andhra Pradesh
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">+91 99999 88888</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">vizag@earlyjobs.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-gray-300">Mon-Sat: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#register" className="text-gray-300 hover:text-primary transition-colors">Register Now</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-primary transition-colors">Upcoming Events</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">Job Placements</span></li>
                <li><span className="text-gray-300">Internship Programs</span></li>
                <li><span className="text-gray-300">Skill Development</span></li>
                <li><span className="text-gray-300">Campus Recruitment</span></li>
                <li><span className="text-gray-300">Career Counseling</span></li>
              </ul>
            </div>
          </div>
          
          {/* Industries We Serve */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h4 className="text-lg font-semibold mb-4">Industries We Serve in Visakhapatnam</h4>
            <div className="flex flex-wrap gap-2">
              {['IT & Software', 'Maritime & Shipping', 'Steel & Manufacturing', 'Hospitality & Tourism', 
                'Banking & Finance', 'Education & Training', 'Healthcare', 'Retail & Consumer Goods'].map((industry) => (
                <span key={industry} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">
                  {industry}
                </span>
              ))}
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#" className="bg-primary p-2 rounded-full hover:bg-primary-glow transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-primary p-2 rounded-full hover:bg-primary-glow transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-primary p-2 rounded-full hover:bg-primary-glow transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="bg-primary p-2 rounded-full hover:bg-primary-glow transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
              
              <div className="text-sm text-gray-400">
                Follow us for updates on jobs, events, and career opportunities in Vizag
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
              <div>
                © 2024 EarlyJobs Visakhapatnam. All rights reserved. | Empowering careers, building futures in Vizag.
              </div>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
              </div>
            </div>
            
            {/* SEO Keywords for Local Search */}
            <div className="mt-2 text-xs text-gray-500">
              Keywords: recruitment franchise in Visakhapatnam, jobs for students in Vizag, internships in Vizag, 
              campus placements Vizag, local job portal Vizag, hiring solutions in Visakhapatnam, EarlyJobs Vizag, 
              career opportunities Andhra Pradesh, IT jobs Vizag, maritime jobs Visakhapatnam
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;