import { Factory, Recycle, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const solutions = [
  {
    icon: Factory,
    title: "Extended Producer Responsibility (EPR)",
    subtitle: "Law & Policy",
    caption: "Corporate accountability meets sustainability. Under the EPR Act of 2022, producers must recover or recycle the plastics they release—paving the way toward a circular economy.",
    buttonText: "Learn More →",
    link: "/existing-solutions#EPR",
    color: "hsl(var(--secondary))"
  },
  {
    icon: Recycle,
    title: "Ecological Solid Waste Management Act (RA 9003)",
    subtitle: "National Program",
    caption: "From barangays to cities, the Solid Waste Management Act pushes segregation, recycling, and composting. Two decades in, it remains the backbone of Philippine waste management.",
    buttonText: "Learn More →",
    link: "/existing-solutions#RA9003",
    color: "hsl(var(--primary))"
  },
  {
    icon: Building2,
    title: "Local Anti-Plastic Ordinances",
    subtitle: "Community Action",
    caption: "Cities like Quezon City, Cebu, and El Nido are leading local bans on single-use plastics—showing visible results in cleaner streets and stronger community awareness.",
    buttonText: "Learn More →",
    link: "/existing-solutions#Ordinances",
    color: "hsl(var(--earth))"
  }
];

export const SolutionsInActionSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Solutions in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore how the Philippines is tackling plastic waste through national laws, 
            corporate responsibility, and local innovation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-strong bg-card/50 backdrop-blur-sm border-border/50"
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-2"
                  style={{ backgroundColor: solution.color }}
                />
                
                <CardHeader className="space-y-3">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${solution.color}20`,
                      border: `2px solid ${solution.color}40`
                    }}
                  >
                    <Icon 
                      className="w-7 h-7 transition-colors duration-300" 
                      style={{ color: solution.color }}
                    />
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                      {solution.subtitle}
                    </p>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed min-h-[120px]">
                    {solution.caption}
                  </CardDescription>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    <Link to={solution.link}>
                      {solution.buttonText}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
