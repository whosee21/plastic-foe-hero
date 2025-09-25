import { HeroSlideshow } from '@/components/HeroSlideshow';
import { StatisticsSection } from '@/components/StatisticsSection';
import { EducationalContent } from '@/components/EducationalContent';
import { SolutionsSection } from '@/components/SolutionsSection';
import { CallToAction } from '@/components/CallToAction';

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
      <StatisticsSection />
      <EducationalContent />
      <SolutionsSection />
      <CallToAction />
    </main>
  );
};

export default Index;