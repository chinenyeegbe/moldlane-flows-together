const Footer = () => {
  const links = {
    company: ["About", "Pricing", "Integrations"],
    resources: ["Documentation", "Partners", "Contact"],
    legal: ["Privacy", "Terms"]
  };

  return (
    <footer className="py-20 px-6 border-t border-border bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Moldlane</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Where your business runs on excellence.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-light">
            © 2025 Moldlane. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
