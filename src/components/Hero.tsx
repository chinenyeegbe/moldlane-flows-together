import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-32 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-primary/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-sm font-semibold tracking-tight">Effortless Excellence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] tracking-tight">
            Every client deserves
            <br />
            your best.{" "}
            <span className="gradient-text">
              Now it's possible.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Moldlane connects your tools and routines so your team can deliver top-tier service at scale — without more effort or headcount.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="premium" className="group text-base h-14 px-8">
              Get Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group text-base h-14 px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-muted-foreground font-light">
            No new tools. No code. Just better results.
          </p>

          {/* Product preview mockup placeholder */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <div className="glass rounded-2xl p-4 shadow-lg">
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-accent/10 to-background rounded-xl border border-border flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl opacity-20">📊</div>
                    <p className="text-muted-foreground font-light">Product Demo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
