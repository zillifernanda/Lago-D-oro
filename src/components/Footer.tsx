const Footer = () => {
  return (
    <footer className="bg-foreground border-t border-primary-foreground/10 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="font-display text-xl text-primary-foreground mb-2">Lago d'Oro</p>
        <p className="font-body text-xs text-primary-foreground/50 tracking-widest uppercase">
          Ristorante Italiano · Friedrichshafen am Bodensee
        </p>
        <p className="font-body text-xs text-primary-foreground/30 mt-4">
          © {new Date().getFullYear()} Lago d'Oro. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
