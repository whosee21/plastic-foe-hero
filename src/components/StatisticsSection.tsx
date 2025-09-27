import { TrendingUp, Globe, Timer, Skull } from 'lucide-react';

const statistics = [
  {
    icon: Globe,
    number: "300M",
    label: "Tons of plastic waste produced annually",
    description: "Equivalent to the weight of the entire human population",
    color: "text-primary"
  },
  {
    icon: Timer,
    number: "450+",
    label: "Years for plastic to decompose",
    description: "A plastic bottle outlives 15 generations",
    color: "text-urgent"
  },
  {
    icon: TrendingUp,
    number: "163",
    label: "Plastic bags used per Filipino annually",
    description: "Philippines ranks among the top plastic polluters globally",
    color: "text-secondary"
  },
  {
    icon: Skull,
    number: "1M+",
    label: "Marine animals killed by plastic yearly",
    description: "Seabirds, sea turtles, and marine mammals suffer most",
    color: "text-destructive"
  }
];

export const StatisticsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
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
            return (
              <div
                key={index}
                className="text-center p-8 rounded-xl bg-card shadow-soft hover:shadow-strong transition-all duration-300 transform hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
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
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-primary/5 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Philippines-Specific Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-urgent mb-2">2.7M</div>
                <p className="text-sm text-muted-foreground">Tons of plastic waste generated annually in the Philippines</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">20%</div>
                <p className="text-sm text-muted-foreground">Of global ocean plastic pollution comes from just 5 Asian countries including Philippines</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">7,641</div>
                <p className="text-sm text-muted-foreground">Islands in the Philippines threatened by marine plastic pollution</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Sources & References</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <a 
              href="https://openknowledge.worldbank.org/handle/10986/35608" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
            >
              <div className="font-medium text-primary">World Bank (2021)</div>
              <div className="text-muted-foreground">Market Study for the Philippines: Plastics Circularity Opportunities and Barriers</div>
            </a>
            <a 
              href="https://doi.org/10.1126/science.1260352" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
            >
              <div className="font-medium text-primary">Jambeck et al. (2015)</div>
              <div className="text-muted-foreground">Plastic waste inputs from land into the ocean. Science</div>
            </a>
            <a 
              href="https://ph.boell.org/en/2019/09/25/plastic-atlas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
            >
              <div className="font-medium text-primary">Böll Foundation (2019)</div>
              <div className="text-muted-foreground">Plastic Atlas: Facts and figures about synthetic polymers</div>
            </a>
            <a 
              href="https://doi.org/10.1016/j.marpolbul.2014.12.041" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
            >
              <div className="font-medium text-primary">Gall & Thompson (2015)</div>
              <div className="text-muted-foreground">The impact of debris on marine life. Marine Pollution Bulletin</div>
            </a>
            <a 
              href="https://www.unep.org/resources/report/single-use-plastics-roadmap-sustainability" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
            >
              <div className="font-medium text-primary">UNEP (2018)</div>
              <div className="text-muted-foreground">Single-use plastics: A roadmap for sustainability</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};