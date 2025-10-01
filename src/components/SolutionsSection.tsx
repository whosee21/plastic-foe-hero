import { 
  RotateCcw, 
  Trash2, 
  ShoppingBag, 
  Scale, 
  Users, 
  Building, 
  Lightbulb,
  CheckCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import reusableImg from '@/assets/reusable-products.jpg';

const solutions = [
  {
    category: "Individual Actions",
    icon: Users,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    actions: [
      {
        icon: ShoppingBag,
        title: "Choose Reusable Alternatives",
        description: "Switch to reusable bags, water bottles, and containers",
        tip: "Bring your own cup to coffee shops - many offer discounts!"
      },
      {
        icon: RotateCcw,
        title: "Refuse Single-Use Items",
        description: "Say no to plastic straws, utensils, and unnecessary packaging",
        tip: "Keep a reusable utensil set in your bag or car"
      },
      {
        icon: Trash2,
        title: "Proper Waste Management",
        description: "Separate recyclables and dispose of waste responsibly",
        tip: "Rinse containers before recycling to improve processing"
      }
    ]
  },
  {
    category: "Community Solutions",
    icon: Building,
    color: "text-primary",
    bgColor: "bg-primary/10",
    actions: [
      {
        icon: Users,
        title: "Organize Community Cleanups",
        description: "Lead beach, river, and neighborhood cleanup initiatives",
        tip: "Partner with local schools and organizations for bigger impact"
      },
      {
        icon: Lightbulb,
        title: "Educational Campaigns",
        description: "Raise awareness through workshops and social media",
        tip: "Share this page and encourage others to take action"
      },
      {
        icon: ShoppingBag,
        title: "Support Plastic-Free Businesses",
        description: "Choose establishments that prioritize sustainable packaging",
        tip: "Ask your favorite stores to offer eco-friendly alternatives"
      }
    ]
  },
  {
    category: "Policy & Legislation",
    icon: Scale,
    color: "text-urgent",
    bgColor: "bg-urgent/10",
    actions: [
      {
        icon: Scale,
        title: "Advocate for Plastic Bans",
        description: "Support local and national legislation restricting single-use plastics",
        tip: "Contact your representatives about plastic pollution concerns"
      },
      {
        icon: Building,
        title: "Extended Producer Responsibility",
        description: "Push for laws making manufacturers responsible for packaging waste",
        tip: "Support brands that take responsibility for their packaging lifecycle"
      },
      {
        icon: CheckCircle,
        title: "Strengthen Recycling Programs",
        description: "Advocate for better waste management infrastructure",
        tip: "Research and support effective recycling initiatives in your area"
      }
    ]
  }
];

const alternatives = [
  { item: "Plastic bags", alternative: "Reusable cloth bags", savings: "1,500 bags/year" },
  { item: "Water bottles", alternative: "Refillable bottle", savings: "1,460 bottles/year" },
  { item: "Coffee cups", alternative: "Reusable cup", savings: "365 cups/year" },
  { item: "Plastic straws", alternative: "Metal/bamboo straws", savings: "584 straws/year" },
  { item: "Food containers", alternative: "Glass containers", savings: "200 containers/year" },
];

export const SolutionsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Solutions That Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The plastic crisis requires action at every level. Here are proven solutions you can implement today, 
            from personal choices to community organizing to policy advocacy.
          </p>
        </div>

        {/* Main Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="p-8 rounded-xl bg-card border border-border shadow-soft hover:shadow-strong transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className={`inline-flex p-4 rounded-full ${category.bgColor} mb-6`}>
                  <CategoryIcon className={`w-8 h-8 ${category.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.actions.map((action, actionIndex) => {
                    const ActionIcon = action.icon;
                    return (
                      <div key={actionIndex} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 p-2 rounded-lg ${category.bgColor}`}>
                          <ActionIcon className={`w-5 h-5 ${category.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-foreground">
                            {action.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {action.description}
                          </p>
                          <p className="text-xs text-primary font-medium">
                            💡 {action.tip}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Sustainable Alternatives Table */}
        <div className="grid lg:grid-cols-5 gap-8 items-center mb-16">
          <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-strong order-2 lg:order-1 relative">
            <img 
              src={reusableImg} 
              alt="Reusable sustainable alternatives to single-use plastic products" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://unsplash.com/photos/assorted-color-plastic-bottles-XMFZqrGyV-Q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 text-[11px] text-white/70 hover:text-white bg-black/40 hover:bg-black/60 px-2 py-1 rounded backdrop-blur-sm transition-all duration-200 italic"
            >
              Source: Unsplash / Bluewater Sweden
            </a>
          </div>
          
          <div className="lg:col-span-3 bg-gradient-earth rounded-xl p-8 order-1 lg:order-2">
            <h3 className="text-3xl font-bold mb-8 text-center text-secondary-foreground">
              Smart Swaps for Immediate Impact
            </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-secondary-foreground/20">
                  <th className="text-left py-4 px-4 text-secondary-foreground font-semibold">Replace This</th>
                  <th className="text-left py-4 px-4 text-secondary-foreground font-semibold">With This</th>
                  <th className="text-left py-4 px-4 text-secondary-foreground font-semibold">Annual Impact</th>
                </tr>
              </thead>
              <tbody>
                {alternatives.map((alt, index) => (
                  <tr key={index} className="border-b border-secondary-foreground/10 hover:bg-secondary-foreground/5 transition-colors">
                    <td className="py-4 px-4 text-secondary-foreground">{alt.item}</td>
                    <td className="py-4 px-4 text-secondary-foreground font-medium">{alt.alternative}</td>
                    <td className="py-4 px-4 text-secondary-foreground">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-foreground/10 text-sm font-medium">
                        Save {alt.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-foreground">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every action counts. Start with one simple change today and inspire others to join the movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Join the Movement
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
              Download Action Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};