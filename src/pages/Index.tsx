import { HeroSlideshow } from '@/components/HeroSlideshow';
import { StatisticsSection } from '@/components/StatisticsSection';
import { EducationalContent } from '@/components/EducationalContent';
import { SolutionsSection } from '@/components/SolutionsSection';
import { SolutionsInActionSection } from '@/components/SolutionsInActionSection';
import { CallToAction } from '@/components/CallToAction';
import { SourcesSection } from '@/components/SourcesSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Stop Single-Use Plastic Waste",
            "description": "Environmental awareness campaign about single-use plastic pollution and actionable solutions",
            "url": "https://stop-plastic-waste.lovable.app",
            "mainEntity": {
              "@type": "Organization",
              "name": "Environmental Action Philippines",
              "description": "Fighting plastic pollution through education and community action"
            }
          })
        }}
      />
      
      <HeroSlideshow />
      
      {/* Disclaimer Box */}
      <div className="py-8 px-4 bg-background">
        <div 
          id="disclaimer" 
          className="bg-white/8 border-l-4 border-accent text-gray-300 text-sm md:text-base italic p-4 rounded-lg mx-auto max-w-3xl text-left leading-relaxed"
          tabIndex={-1}
        >
          <strong>Disclaimer:</strong> This website is part of a school project. It is created for educational purposes to provide information on an environmental issue and to spark collective actions for the preservation and protection of the Earth's ecosystems.
        </div>
      </div>
      
      <StatisticsSection />
      <EducationalContent />
      <SolutionsInActionSection />
      <SolutionsSection />
      <CallToAction />
      <SourcesSection />
    </main>
  );
};

export default Index;