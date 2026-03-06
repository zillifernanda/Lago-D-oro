import heroImage from "@/assets/hero-lakeside.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <img
        src={heroImage}
        alt="Restaurante italiano à beira do Lago de Constança"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground tracking-wide">
          Lago d'Oro
        </span>
        <div className="hidden md:flex gap-8 font-body text-sm tracking-widest uppercase text-primary-foreground/90">
          <a href="#about" className="hover:text-accent transition-colors">Über Uns</a>
          <a href="#menu" className="hover:text-accent transition-colors">Speisekarte</a>
          <a href="#gallery" className="hover:text-accent transition-colors">Galerie</a>
          <a href="#contact" className="hover:text-accent transition-colors">Kontakt</a>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="font-body text-sm md:text-base tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Ristorante Italiano am Bodensee
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
          Lago d'Oro
        </h1>
        <p className="font-display text-lg md:text-2xl italic text-primary-foreground/90 mb-8 max-w-2xl">
          Authentische italienische Küche mit Blick auf den Bodensee in Friedrichshafen
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm tracking-widest uppercase rounded hover:bg-primary/90 transition-colors"
          >
            Tisch Reservieren
          </a>
          <a
            href="#menu"
            className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body text-sm tracking-widest uppercase rounded hover:bg-primary-foreground/10 transition-colors"
          >
            Speisekarte
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
