import { CheckCircle2, Sparkles } from "lucide-react";

const Transformation = () => {
  const benefits = [
    "Every client gets the same care and consistency as your best one.",
    "Your tools, data, and workflows finally speak the same language.",
    "Your team can focus on decisions, not checklists.",
    "You scale quality, not complexity."
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">The Transformation</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Turn your everyday work into
            <br />
            <span className="gradient-text">intelligent, repeatable excellence.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Moldlane quietly coordinates your systems so the right things happen — every time — without anyone needing to chase them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group flex items-start gap-5 p-8 rounded-2xl glass hover:shadow-lg transition-all duration-500 animate-fade-in-up border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="h-7 w-7 text-primary flex-shrink-0 mt-1 transition-transform group-hover:scale-110" />
              <p className="text-lg md:text-xl text-card-foreground leading-relaxed font-light">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="text-2xl md:text-3xl font-semibold text-muted-foreground italic font-light">
            The things that make your business great — now, multiplied.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
