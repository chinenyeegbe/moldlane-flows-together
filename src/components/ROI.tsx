import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Heart, ArrowRight } from "lucide-react";

const ROI = () => {
  const metrics = [
    {
      icon: Clock,
      metric: "4 hours",
      description: "saved per employee daily",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      metric: "30%",
      description: "increase in client retention",
      color: "text-green-500"
    },
    {
      icon: Heart,
      metric: "50%",
      description: "faster response times",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            More quality. Less cost.
            <span className="text-primary"> No chaos.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              className="text-center p-8 rounded-2xl bg-card border-2 border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
              <div className="text-4xl font-bold text-foreground mb-2">{metric.metric}</div>
              <p className="text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="premium" className="group">
            Get Your Free Audit
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ROI;
