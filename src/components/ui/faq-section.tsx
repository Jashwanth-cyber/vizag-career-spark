import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What languages are supported for interviews and communication?",
      answer: "We conduct interviews and provide support in English, Telugu, and Hindi. Our team is well-versed in the local language preferences of Visakhapatnam and can accommodate candidates comfortable in any of these languages."
    },
    {
      question: "Which industries have the most opportunities in Vizag?",
      answer: "Visakhapatnam has thriving opportunities in IT & Software (HITEC City), Maritime & Port Operations (Vizag Port), Hospitality & Tourism (beach resorts, hotels), Education sector, and emerging startups. We have strong partnerships across all these sectors."
    },
    {
      question: "What are the eligibility criteria for job placements?",
      answer: "Eligibility varies by role, but generally we work with graduates and undergraduates from all streams. For fresher positions, a graduation degree is preferred. For experienced roles, relevant work experience is considered. We also have opportunities for diploma holders and skill-based positions."
    },
    {
      question: "Is there any registration fee or charges for students?",
      answer: "Registration with EarlyJobs Visakhapatnam is completely FREE for students and job seekers. We don't charge any fees for job placements, interview arrangements, or skill development workshops. Our revenue comes from partnering companies, not from candidates."
    },
    {
      question: "How quickly can I expect to get interview opportunities?",
      answer: "Active candidates typically receive their first interview opportunity within 3-7 days of registration. However, this depends on your profile, skills, and the current job openings in your preferred sector in Vizag."
    },
    {
      question: "Do you provide training and skill development programs?",
      answer: "Yes! We regularly conduct skill development workshops, interview preparation sessions, resume building workshops, and industry-specific training programs. These are usually held at our Dwaraka Nagar office or partner college campuses."
    },
    {
      question: "Can students from other cities apply for Vizag positions?",
      answer: "Absolutely! We welcome applications from students across Andhra Pradesh and Telangana who are willing to relocate to Visakhapatnam. Many of our partner companies provide accommodation support for outstation candidates."
    },
    {
      question: "How do colleges partner with EarlyJobs Vizag?",
      answer: "Colleges can partner with us by contacting our academic partnerships team. We offer campus recruitment drives, industry connect programs, guest lectures, and placement support services. Partnership is beneficial for improving college placement statistics."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about EarlyJobs Visakhapatnam services, 
            processes, and opportunities. Can't find what you're looking for? 
            <span className="text-primary font-medium"> Contact us directly!</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-card overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left hover:bg-accent/50 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-secondary pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-warm rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our Visakhapatnam team is here to help! Reach out to us through any of these channels 
              and we'll get back to you promptly.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h4 className="font-semibold text-secondary mb-2">Call Us</h4>
                <p className="text-muted-foreground">+91-9999-123-456</p>
                <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 7 PM</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h4 className="font-semibold text-secondary mb-2">Email Us</h4>
                <p className="text-muted-foreground">vizag@earlyjobs.in</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h4 className="font-semibold text-secondary mb-2">Visit Us</h4>
                <p className="text-muted-foreground">Dwaraka Nagar, Vizag</p>
                <p className="text-sm text-muted-foreground">Walk-ins welcome</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};