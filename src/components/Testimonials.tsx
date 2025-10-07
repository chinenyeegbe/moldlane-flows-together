import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Moldlane helped us give every client the same attention we used to reserve for our top 5%. It's like having our best employee cloned across the whole company.",
      author: "Sarah Chen",
      role: "COO, Service Company",
    },
    {
      quote: "Our operations finally feel calm. We didn't add tools — we just made them work together.",
      author: "Michael Rodriguez",
      role: "Operations Lead, Consulting Firm",
    }
  ];

  const logos = ["HubSpot", "Notion", "Make", "Gmail", "Slack"];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted by teams that never compromise on quality.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="h-10 w-10 text-primary mb-4" />
              <blockquote className="text-lg text-card-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Logo Bar */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Integrates With Your Favorite Tools
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-xl font-semibold text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
