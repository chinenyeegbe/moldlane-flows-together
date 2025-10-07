import { Workflow, Brain, Users, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Workflow,
      title: "Unified Workflows",
      description: "Connect your CRM, inbox, spreadsheets, and tools in minutes — no code, no setup headaches.",
      color: "text-blue-500"
    },
    {
      icon: Brain,
      title: "Intelligent Orchestration",
      description: "Moldlane learns how your business runs, then handles the busywork behind the scenes.",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "Scalable Personalization",
      description: "Send the right message, to the right person, at the right time — automatically, but never impersonally.",
      color: "text-green-500"
    },
    {
      icon: Shield,
      title: "Transparent Oversight",
      description: "Always know what's happening and why. Every task, message, and update stays traceable and under your control.",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The foundation for
            <span className="text-primary"> effortless excellence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className={`h-12 w-12 mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              <h3 className="text-2xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
