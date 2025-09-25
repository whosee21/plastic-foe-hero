import { Heart, Leaf, Users, AlertTriangle } from 'lucide-react';

const impacts = [
  {
    icon: Leaf,
    title: "Environmental Devastation",
    description: "Single-use plastics break down into microplastics that contaminate soil, water, and air. These tiny particles persist for centuries, disrupting ecosystems and entering the food chain at every level.",
    effects: [
      "Ocean acidification from plastic chemicals",
      "Habitat destruction in marine and terrestrial environments",
      "Disruption of natural carbon cycles",
      "Contamination of agricultural lands"
    ]
  },
  {
    icon: Heart,
    title: "Human Health Crisis",
    description: "Microplastics and plastic chemicals infiltrate our bodies through food, water, and air. Scientific studies link plastic pollution to serious health conditions affecting millions worldwide.",
    effects: [
      "Hormone disruption and fertility issues",
      "Increased cancer risks from toxic chemicals",
      "Respiratory problems from airborne microplastics",
      "Cardiovascular disease links to plastic additives"
    ]
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Plastic pollution disproportionately affects vulnerable communities, particularly in developing nations. Waste management failures create environmental injustice and economic hardship.",
    effects: [
      "Coastal communities losing livelihoods to pollution",
      "Indigenous peoples facing cultural site contamination",
      "Low-income areas bearing waste disposal burden",
      "Tourism industry losses from polluted environments"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Future Consequences",
    description: "Without immediate action, plastic production is set to triple by 2050. The window for preventing irreversible damage to our planet's life-support systems is rapidly closing.",
    effects: [
      "Projected 12 billion tons of plastic in landfills by 2050",
      "Complete collapse of marine food webs",
      "Uninhabitable coastal areas due to pollution",
      "Irreversible climate change acceleration"
    ]
  }
];

export const EducationalContent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Understanding the Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Single-use plastics create a ripple effect of destruction that touches every aspect of life on Earth. 
            Here's how this crisis affects our environment, health, communities, and future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {impacts.map((impact, index) => {
            const IconComponent = impact.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-strong transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {impact.description}
                    </p>
                    <ul className="space-y-3">
                      {impact.effects.map((effect, effectIndex) => (
                        <li key={effectIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-urgent mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{effect}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-hero text-primary-foreground">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              The Science is Clear
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Peer-reviewed research confirms that immediate, decisive action is needed to prevent catastrophic environmental collapse.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">99%</div>
                <p className="text-sm opacity-80">Of seabirds predicted to have plastic in their stomachs by 2050</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">5g</div>
                <p className="text-sm opacity-80">Of microplastics consumed by average person weekly (credit card equivalent)</p>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">$139B</div>
                <p className="text-sm opacity-80">Annual economic damage from marine plastic pollution globally</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};