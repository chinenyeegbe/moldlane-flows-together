import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow } from "lucide-react";

const ProductDemo = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20 animate-fade-in space-y-6">
          <div className="inline-flex items-center gap-2 mb-4">
            <Workflow className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">How It Works</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Everything works together.
            <br />
            <span className="gradient-text">Effortlessly.</span>
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-4xl mx-auto">
            <p>
              From the moment a new lead comes in to the day they renew, Moldlane keeps every system in sync. CRMs update, follow-ups send, reports build, and insights surface — automatically.
            </p>
            <p className="text-lg">
              No switching tabs. No reminders lost. Just a business that runs the way it should.
            </p>
          </div>
        </div>

        {/* Before/After Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Before */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <span className="text-2xl">❌</span>
              </div>
              <h3 className="text-2xl font-semibold">Before</h3>
            </div>
            <div className="glass rounded-2xl p-8 space-y-4 border border-destructive/20">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted rounded-xl border border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col gap-3 p-6">
                  <div className="h-12 bg-destructive/20 rounded animate-pulse" />
                  <div className="h-12 bg-destructive/20 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="h-12 bg-destructive/20 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <p className="relative text-muted-foreground font-light text-sm">Disconnected chaos</p>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Scattered tools, manual workflows, data silos, missed follow-ups
              </p>
            </div>
          </div>

          {/* After */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-2xl font-semibold">After</h3>
            </div>
            <div className="glass rounded-2xl p-8 space-y-4 border border-primary/30 shadow-glow">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 via-accent/5 to-background rounded-xl border border-primary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col gap-3 p-6">
                  <div className="h-12 bg-primary/30 rounded animate-pulse" />
                  <div className="h-12 bg-accent/30 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="h-12 bg-primary/20 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <p className="relative text-foreground font-light text-sm z-10">Seamless orchestration</p>
              </div>
              <p className="text-muted-foreground leading-relaxed font-light">
                Unified workflows, automated intelligence, real-time sync, perfect execution
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="premium" className="group text-base h-14 px-8">
            Book a Call
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDemo;
