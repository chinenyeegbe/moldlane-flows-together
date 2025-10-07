import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const ROI = () => {
  const metrics = [
    { value: "4 hours", label: "Saved per employee daily", icon: "⏱️" },
    { value: "30%", label: "Increase in client retention", icon: "📈" },
    { value: "50%", label: "Faster response times", icon: "⚡" }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Large decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">ROI & Value</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            More quality. Less cost.
            <br />
            <span className="text-muted-foreground">No chaos.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            When your systems work together, your people do too.
            <br />
            That means more time for high-value work, fewer dropped balls, and happier clients.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="group text-center p-10 rounded-3xl glass border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6">{metric.icon}</div>
              <div className="text-5xl md:text-6xl font-bold mb-4 gradient-text">{metric.value}</div>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="premium" className="group text-base h-14 px-8">
            Get Your Free Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ROI;
