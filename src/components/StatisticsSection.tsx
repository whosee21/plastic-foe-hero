import { TrendingUp, Globe, Timer, Skull } from 'lucide-react';
import oceanPlasticImg from '@/assets/ocean-plastic-pollution.jpg';
const statistics = [{
  icon: Globe,
  number: "300M",
  label: "Tons of plastic waste produced annually",
  description: "Equivalent to the weight of the entire human population (United Nations Environment Programme, 2023)",
  color: "text-primary"
}, {
  icon: Timer,
  number: "450+",
  label: "Years for plastic to decompose",
  description: "A single plastic bottle outliving 15 generations (National Oceanic and Atmospheric Administration, 2024)",
  color: "text-urgent"
}, {
  icon: TrendingUp,
  number: "163",
  label: <>Plasic <i>labo</i> bags used per Filipino annually</>,
  description: "Philippines ranks among the top plastic polluters globally (Global Alliance for Incinerator Alternatives, 2019)",
  color: "text-secondary"
}, {
  icon: Skull,
  number: "1M+",
  label: "Marine animals killed by plastic yearly",
  description: "Seabirds, sea turtles, and marine mammals suffer most (United Nations Educational, Scientific and Cultural Organization, 2023)",
  color: "text-destructive"
}];
export const StatisticsSection = () => {
  return <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            The Devastating Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The plastic crisis demands immediate action. These statistics reveal the urgency of the situation we face.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
          const IconComponent = stat.icon;
           return <div key={index} className="text-center p-8 rounded-xl bg-card card-hover animate-fade-up" style={{
             animationDelay: `${index * 0.2}s`,
             boxShadow: 'var(--shadow-card)'
           }}>
                <div className={`inline-flex p-4 rounded-full bg-muted mb-6 ${stat.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>;
        })}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden shadow-strong relative">
            <img 
              src={oceanPlasticImg} 
              alt="Plastic pollution in ocean water showing environmental damage to marine ecosystems" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://unsplash.com/photos/plastic-bottles-on-body-of-water-_qhzF4XxYFE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-[11px] text-white/70 hover:text-white bg-black/40 hover:bg-black/60 px-2 py-1 rounded backdrop-blur-sm transition-all duration-200 italic"
            >
              Source: Unsplash / Naja Bertolt Jensen
            </a>
          </div>
          
          <div className="p-8 rounded-xl bg-primary/5 border border-primary/20">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Current Situation
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The Philippines has been called the "sachet economy", with Filipinos consuming about 163 million plastic sachets every day (Böll Foundation SEA, 2019). Only about 28% of key plastic resins are recycled, leaving most plastics in landfills, waterways, or the ocean (World Bank, 2021).
              </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-urgent mb-2">2.7M</div>
                <p className="text-sm text-muted-foreground">Tons of plastic waste generated annually in the Philippines</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">163M</div>
                <p className="text-sm text-muted-foreground">Plastic sachets consumed daily by Filipinos</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">28%</div>
                <p className="text-sm text-muted-foreground">Recycling rate for key plastic resins in the Philippines</p>
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