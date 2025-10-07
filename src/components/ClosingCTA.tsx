import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Excellence shouldn't be hard.
            <br />
            <span className="text-primary">It should be automatic.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Moldlane gives your team the power to deliver their best work — every time, for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button size="lg" variant="premium" className="group">
              Get Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground italic">
            Be among the first to experience effortless excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
