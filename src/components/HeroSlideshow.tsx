import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Waves, Mountain, TreePine, Fish, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';
import oceanPollution from '@/assets/ocean-pollution.jpg';
import landfillWaste from '@/assets/landfill-waste.jpg';
import beachContamination from '@/assets/beach-contamination.jpg';
import wildlifeSuffering from '@/assets/wildlife-suffering.jpg';
import waterContamination from '@/assets/water-contamination.jpg';

const slides = [
  {
    image: oceanPollution,
    icon: Waves,
    caption: "8 million tons of plastic enter our oceans every year",
    subtitle: "Marine life pays the ultimate price"
  },
  {
    image: landfillWaste,
    icon: Mountain,
    caption: "Plastic waste takes 450+ years to decompose",
    subtitle: "Our landfills are overflowing with single-use plastics"
  },
  {
    image: beachContamination,
    icon: TreePine,
    caption: "1 million plastic bottles are bought every minute",
    subtitle: "Pristine beaches become graveyards of plastic waste"
  },
  {
    image: wildlifeSuffering,
    icon: Fish,
    caption: "100,000 marine animals die from plastic pollution annually",
    subtitle: "Wildlife mistakes plastic for food with fatal consequences"
  },
  {
    image: waterContamination,
    icon: Droplets,
    caption: "Microplastics contaminate our drinking water",
    subtitle: "Plastic pollution affects every level of the food chain"
  }
];

export const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentSlide];
  const IconComponent = current.icon;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto text-white animate-fade-up">
          <div className="mb-6 flex justify-center">
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
              <IconComponent className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Stop the Plastic Crisis
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-semibold animate-slide-in">
            {current.caption}
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-blue-100 animate-slide-in">
            {current.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="action" size="lg" className="text-lg px-8 py-6">
              Take Action Now
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};