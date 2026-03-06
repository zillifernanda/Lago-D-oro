import interiorImage from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              Über Uns
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Wo Italien auf den<br />
              <span className="italic text-primary">Bodensee</span> trifft
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Willkommen im Lago d'Oro – Ihrem italienischen Refugium direkt am Ufer des Bodensees 
              in Friedrichshafen. Seit über 15 Jahren bringen wir die Aromen und die Leidenschaft 
              der italienischen Küche an den schönsten See Deutschlands.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Unsere Gerichte werden täglich frisch zubereitet, mit ausgewählten Zutaten aus Italien 
              und der Region. Genießen Sie ein unvergessliches Dinner mit einem atemberaubenden 
              Blick auf die Alpen und den glitzernden See.
            </p>
            <div className="flex gap-12">
              <div>
                <p className="font-display text-3xl font-bold text-primary">15+</p>
                <p className="font-body text-sm text-muted-foreground">Jahre Erfahrung</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="font-body text-sm text-muted-foreground">Frische Zutaten</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">★ 4.9</p>
                <p className="font-body text-sm text-muted-foreground">Google Bewertung</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={interiorImage}
              alt="Gemütliches Interieur des Lago d'Oro"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-display text-lg italic">"La dolce vita<br />am Bodensee"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
