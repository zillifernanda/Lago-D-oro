import { MapPin, Clock, Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const whatsappNumber = "4917612345678";
  const email = "info@lagodoro-fn.de";

  return (
    <section id="contact" className="py-20 md:py-28 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Kontakt & Reservierung
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Besuchen Sie Uns
          </h2>
          <p className="font-body text-primary-foreground/70 max-w-xl mx-auto">
            Reservieren Sie Ihren Tisch direkt per WhatsApp oder E-Mail
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-display text-lg font-semibold mb-2">Adresse</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Seestraße 42<br />
              88045 Friedrichshafen<br />
              Deutschland
            </p>
          </div>
          <div className="text-center p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
            <Clock className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-display text-lg font-semibold mb-2">Öffnungszeiten</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Di – Sa: 11:30 – 22:00<br />
              Sonntag: 11:30 – 21:00<br />
              Montag: Ruhetag
            </p>
          </div>
          <div className="text-center p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
            <Phone className="w-8 h-8 mx-auto mb-4 text-accent" />
            <h3 className="font-display text-lg font-semibold mb-2">Telefon</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              +49 7541 123 456<br />
              Reservierungen<br />
              bevorzugt per WhatsApp
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground font-body text-sm tracking-widest uppercase rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Reservierung
          </a>
          <a
            href={`mailto:${email}?subject=Tischreservierung&body=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20einen%20Tisch%20reservieren.`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-sm tracking-widest uppercase rounded-lg hover:bg-primary-foreground/10 transition-colors"
          >
            <Mail className="w-5 h-5" />
            E-Mail Schreiben
          </a>
        </div>

        <div className="mt-16 rounded-lg overflow-hidden shadow-xl">
          <iframe
            title="Lago d'Oro Standort"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43012.12!2d9.47!3d47.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b0e8b0c5b5e1f%3A0x1!2sFriedrichshafen!5e0!3m2!1sde!2sde!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
