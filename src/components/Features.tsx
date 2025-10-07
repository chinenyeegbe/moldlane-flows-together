import { Zap, Network, Users, Eye } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Network,
      title: "Unified Workflows",
      description: "Connect your CRM, inbox, spreadsheets, and tools in minutes — no code, no setup headaches.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Zap,
      title: "Intelligent Orchestration",
      description: "Moldlane learns how your business runs, then handles the busywork behind the scenes.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Users,
      title: "Scalable Personalization",
      description: "Send the right message, to the right person, at the right time — automatically, but never impersonally.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Eye,
      title: "Transparent Oversight",
      description: "Always know what's happening and why. Every task, message, and update stays traceable and under your control.",
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Features</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            The foundation for
            <br />
            <span className="gradient-text">effortless excellence.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-12 rounded-3xl glass border border-border hover:border-primary/30 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border border-border group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">{feature.title}</h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
