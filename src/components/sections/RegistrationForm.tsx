import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Upload, Loader2 } from "lucide-react";

export const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    city: "Visakhapatnam",
    experience: "",
    skills: "",
    preferredIndustry: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section className="py-20 bg-gradient-card" id="register">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 text-center bg-white shadow-warm border-0">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Registration Successful!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to the EarlyJobs Visakhapatnam network! Our team will contact you within 24 hours 
                to discuss opportunities that match your profile.
              </p>
              <div className="bg-warm rounded-lg p-6">
                <h4 className="font-semibold text-secondary mb-4">What happens next?</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Profile verification & skills assessment</li>
                  <li>• Matching with relevant job opportunities</li>
                  <li>• Interview scheduling & preparation support</li>
                  <li>• Continuous career guidance & updates</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Keep an eye on your email and phone for updates from our Vizag team!
              </p>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-card" id="register">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Join EarlyJobs Visakhapatnam Network
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your dream career in Vizag. Fill out this form 
            to get matched with the best opportunities in your field.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8 md:p-12 bg-white shadow-warm border-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="+91 9999 123 456"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    I am a... *
                  </label>
                  <select
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="recent-graduate">Recent Graduate</option>
                    <option value="job-seeker">Experienced Job Seeker</option>
                    <option value="college-rep">College Representative</option>
                    <option value="employer">Employer/HR</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth bg-accent"
                    readOnly
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">
                    Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  >
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher (0-1 years)</option>
                    <option value="entry-level">Entry Level (1-3 years)</option>
                    <option value="mid-level">Mid Level (3-7 years)</option>
                    <option value="senior-level">Senior Level (7+ years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Preferred Industry
                </label>
                <select
                  name="preferredIndustry"
                  value={formData.preferredIndustry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                >
                  <option value="">Select industry preference</option>
                  <option value="it-software">IT & Software</option>
                  <option value="maritime-port">Maritime & Port Operations</option>
                  <option value="hospitality-tourism">Hospitality & Tourism</option>
                  <option value="education-training">Education & Training</option>
                  <option value="banking-finance">Banking & Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail-ecommerce">Retail & E-commerce</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Key Skills (Optional)
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                  placeholder="e.g., Java, Python, Communication, MS Office, etc."
                ></textarea>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Upload Resume (Optional)
                </label>
                <div className="border-2 border-dashed border-input rounded-lg p-6 text-center hover:border-primary transition-smooth">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground mb-2">Drag & drop your resume here, or click to browse</p>
                  <p className="text-sm text-muted-foreground">Supported formats: PDF, DOC, DOCX (Max 5MB)</p>
                  <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-glow text-white py-4 text-lg font-semibold transition-spring"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Join EarlyJobs Vizag Network"
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                By registering, you agree to our 
                <span className="text-primary"> Terms of Service</span> and 
                <span className="text-primary"> Privacy Policy</span>. 
                We'll use your information to match you with relevant opportunities in Visakhapatnam.
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};