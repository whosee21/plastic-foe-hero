export const SourcesSection = () => {
  const sources = [
    {
      title: "World Bank (2021)",
      description: "Report on plastic waste generation and recycling challenges in the Philippines.",
      url: "https://openknowledge.worldbank.org/handle/10986/35608"
    },
    {
      title: "Jambeck et al. (2015)",
      description: "Study on how plastic waste enters oceans from land.",
      url: "https://doi.org/10.1126/science.1260352"
    },
    {
      title: "Böll Foundation SEA (2019)",
      description: "Plastic Atlas highlighting global and Philippine plastic use, including sachet economy.",
      url: "https://ph.boell.org/en/2019/09/25/plastic-atlas"
    },
    {
      title: "Gall & Thompson (2015)",
      description: "Research on how plastic debris affects marine animals and ecosystems.",
      url: "https://doi.org/10.1016/j.marpolbul.2014.12.041"
    },
    {
      title: "United Nations Environment Programme (2018)",
      description: "Global roadmap on reducing single-use plastics.",
      url: "https://www.unep.org/resources/report/single-use-plastics-roadmap-sustainability"
    }
  ];

  return (
    <section id="sources" className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Sources</h2>
        
        <p className="text-sm italic text-muted-foreground mb-6">
          Figures and information on this site are summarized from the following credible sources:
        </p>

        <div className="space-y-4">
          {sources.map((source, index) => (
            <div key={index} className="text-sm leading-relaxed">
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary hover:underline focus:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              >
                {source.title}
              </a>
              <span className="text-muted-foreground"> – {source.description}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8 pt-4 border-t border-border">
          Last updated: September 27, 2025 (UTC+8)
        </p>
      </div>
    </section>
  );
};