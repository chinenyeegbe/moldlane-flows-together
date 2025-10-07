const Problem = () => {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Excellence shouldn't depend on
            <br />
            <span className="text-muted-foreground">extra hours or extra people.</span>
          </h2>
          
          <div className="space-y-6 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto pt-8">
            <p>
              Delivering an exceptional experience takes work — remembering every follow-up, tracking every detail, keeping every client feeling seen.
            </p>
            <p>
              But as your business grows, that kind of attention gets harder to sustain.
            </p>
            <p>
              People get stretched. Things slip. Quality starts to depend on luck — not process.
            </p>
          </div>

          <div className="pt-8">
            <p className="text-2xl md:text-3xl font-semibold gradient-text">
              Moldlane changes that.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
