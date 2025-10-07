import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Dramatic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[150px] animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-12 p-12 md:p-20 rounded-3xl glass border border-border animate-fade-in">
          <Sparkles className="w-16 h-16 text-accent mx-auto" />
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Excellence shouldn't be hard.
              <br />
              <span className="gradient-text">It should be automatic.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Moldlane gives your team the power to deliver their best work — every time, for everyone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="premium" className="group text-base h-14 px-8">
              Get Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-light">
            Be among the first to experience effortless excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
