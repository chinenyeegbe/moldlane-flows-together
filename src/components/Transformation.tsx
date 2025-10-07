import { CheckCircle2 } from "lucide-react";

const Transformation = () => {
  const benefits = [
    "Every client gets the same care and consistency as your best one.",
    "Your tools, data, and workflows finally speak the same language.",
    "Your team can focus on decisions, not checklists.",
    "You scale quality, not complexity."
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Turn your everyday work into intelligent,
            <br />
            <span className="text-primary">repeatable excellence.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Moldlane quietly coordinates your systems so the right things happen — every time — without anyone needing to chase them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <p className="text-lg text-card-foreground">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold text-muted-foreground italic">
            The things that make your business great — now, multiplied.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
