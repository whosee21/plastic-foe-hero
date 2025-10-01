import { Heart, Leaf, Users, AlertTriangle } from 'lucide-react';
import recyclingImg from '@/assets/recycling-center.jpg';
const impacts = [{
  icon: Leaf,
  title: "Impact on Ecosystems & Humans",
  description: "Globally, studies estimate that 4.8 to 12.7 million metric tons of plastic enter the oceans each year (Jambeck et al., 2015). Once in the marine environment, plastics break down into microplastics that harm ecosystems and can even enter the human food chain. Research shows that plastic debris causes entanglement, ingestion, and habitat damage for countless species (Gall & Thompson, 2015).",
  effects: ["Ocean acidification from plastic chemicals", "Habitat destruction in marine and terrestrial environments", "Disruption of natural carbon cycles", "Contamination of agricultural lands"]
}, {
  icon: Heart,
  title: "Human Health Crisis",
  description: "Microplastics and plastic chemicals infiltrate our bodies through food, water, and air. Scientific studies link plastic pollution to serious health conditions affecting millions worldwide.",
  effects: ["Hormone disruption and fertility issues", "Increased cancer risks from toxic chemicals", "Respiratory problems from airborne microplastics", "Cardiovascular disease links to plastic additives"]
}, {
  icon: Users,
  title: "Why It Matters",
  description: "Plastic pollution not only harms marine animals but also threatens livelihoods, fisheries, and human health. The United Nations warns that single-use plastics are one of the greatest environmental threats of our time (UNEP, 2018).",
  effects: ["Coastal communities losing livelihoods to pollution", "Indigenous peoples facing cultural site contamination", "Low-income areas bearing waste disposal burden", "Tourism industry losses from polluted environments"]
}, {
  icon: AlertTriangle,
  title: "Future Consequences",
  description: "Without immediate action, plastic production is set to triple by 2050. The window for preventing irreversible damage to our planet's life-support systems is rapidly closing.",
  effects: ["Projected 12 billion tons of plastic in landfills by 2050", "Complete collapse of marine food webs", "Uninhabitable coastal areas due to pollution", "Irreversible climate change acceleration"]
}];
export const EducationalContent = () => {
  return <section className="py-20 bg-gradient-to-b from-muted to-background">
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
           return <div key={index} className="p-8 rounded-xl bg-card border border-border card-hover animate-fade-up" style={{
             animationDelay: `${index * 0.3}s`,
             boxShadow: 'var(--shadow-card)'
           }}>
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
                      {impact.effects.map((effect, effectIndex) => <li key={effectIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-urgent mt-2 flex-shrink-0" />
                          <span className="text-sm text-foreground">{effect}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>;
        })}
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-strong relative">
            <img 
              src={recyclingImg} 
              alt="Recycling and sustainable waste management practices reducing plastic pollution" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://unsplash.com/photos/green-and-white-plastic-bottles-FV3GConVSss" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-[11px] text-white/70 hover:text-white bg-black/40 hover:bg-black/60 px-2 py-1 rounded backdrop-blur-sm transition-all duration-200 italic"
            >
              Source: Unsplash / Pawel Czerwinski
            </a>
          </div>
          
          <div className="lg:col-span-3 p-8 rounded-xl bg-gradient-hero text-primary-foreground">
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

        <div className="mt-12 text-center">
          
          
        </div>
      </div>
    </section>;
};