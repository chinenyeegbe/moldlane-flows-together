import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Mail, Calendar, BarChart3 } from "lucide-react";

const ProductDemo = () => {
  const integrations = [
    { name: "CRM", icon: Database, color: "text-blue-500" },
    { name: "Email", icon: Mail, color: "text-purple-500" },
    { name: "Calendar", icon: Calendar, color: "text-green-500" },
    { name: "Analytics", icon: BarChart3, color: "text-orange-500" }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Everything works together.
            <span className="text-primary"> Effortlessly.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From the moment a new lead comes in to the day they renew, Moldlane keeps every system in sync. CRMs update, follow-ups send, reports build, and insights surface — automatically.
          </p>
          <p className="text-lg text-muted-foreground mt-4">
            No switching tabs. No reminders lost. Just a business that runs the way it should.
          </p>
        </div>

        {/* Integration Flow Visualization */}
        <div className="relative mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {integrations.map((integration, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-110 cursor-pointer">
                  <integration.icon className={`h-10 w-10 ${integration.color}`} />
                  <span className="text-sm font-semibold text-card-foreground">{integration.name}</span>
                </div>
                {index < integrations.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-10 top-1/2 -translate-y-1/2 h-6 w-6 text-primary animate-pulse" />
                )}
              </div>
            ))}
          </div>
          
          {/* Center connector */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent md:hidden" />
        </div>

        <div className="text-center">
          <Button size="lg" variant="premium" className="group">
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
