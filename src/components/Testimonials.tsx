import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Moldlane helped us give every client the same attention we used to reserve for our top 5%. It's like having our best employee cloned across the whole company.",
      author: "Sarah Chen",
      role: "COO, Service Company",
      rating: 5
    },
    {
      quote: "Our operations finally feel calm. We didn't add tools — we just made them work together.",
      author: "Michael Rodriguez",
      role: "Operations Lead, Consulting Firm",
      rating: 5
    }
  ];

  const integrations = [
    "HubSpot", "Notion", "Make", "Gmail", "Slack", "Zapier"
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Trusted by teams that
            <br />
            <span className="gradient-text">never compromise on quality.</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-10 rounded-3xl glass border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-12 h-12 text-primary/20 mb-6" />
              
              <div className="space-y-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-foreground leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration logos */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-semibold">
            Integrates seamlessly with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-xl glass border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <span className="text-sm font-semibold text-muted-foreground">
                  {integration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
