import dishPasta from "@/assets/dish-pasta.jpg";
import dishPizza from "@/assets/dish-pizza.jpg";
import dishTiramisu from "@/assets/dish-tiramisu.jpg";
import dishRisotto from "@/assets/dish-risotto.jpg";

const dishes = [
  {
    name: "Tagliatelle ai Porcini",
    description: "Hausgemachte Tagliatelle mit frischen Steinpilzen und Trüffelspänen",
    price: "€18,90",
    image: dishPasta,
    category: "Primi Piatti",
  },
  {
    name: "Pizza Margherita DOC",
    description: "San Marzano Tomaten, Büffelmozzarella, frisches Basilikum aus dem Holzofen",
    price: "€14,50",
    image: dishPizza,
    category: "Pizza",
  },
  {
    name: "Risotto ai Frutti di Mare",
    description: "Safranrisotto mit Garnelen, Muscheln und frischen Kräutern",
    price: "€22,90",
    image: dishRisotto,
    category: "Primi Piatti",
  },
  {
    name: "Tiramisù della Casa",
    description: "Traditionelles Tiramisù mit Mascarpone und Espresso – Rezept der Nonna",
    price: "€9,50",
    image: dishTiramisu,
    category: "Dolci",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Unsere Speisekarte
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sapori d'Italia
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Eine Auswahl unserer beliebtesten Gerichte – mit Liebe und Tradition zubereitet
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="group bg-background rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body tracking-widest uppercase px-3 py-1 rounded">
                  {dish.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {dish.name}
                  </h3>
                  <span className="font-display text-lg font-bold text-primary whitespace-nowrap ml-4">
                    {dish.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
