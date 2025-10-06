export const SourcesSection = () => {
  const sources = [
    {
      title: "World Bank (2021)",
      description: "Market Study for the Philippines: Plastics Circularity Opportunities and Barriers. World Bank Group.",
      url: "https://openknowledge.worldbank.org/handle/10986/35608"
    },
    {
      title: "Jambeck, J. R., Geyer, R., Wilcox, C., Siegler, T. R., Perryman, M., Andrady, A., Narayan, R., & Law, K. L. (2015)",
      description: "Plastic waste inputs from land into the ocean. Science, 347(6223), 768–771.",
      url: "https://doi.org/10.1126/science.1260352"
    },
    {
      title: "Böll Foundation Southeast Asia (2019)",
      description: "Plastic Atlas: Facts and figures about the world of synthetic polymers.",
      url: "https://ph.boell.org/en/2019/09/25/plastic-atlas"
    },
    {
      title: "Gall, S. C., & Thompson, R. C. (2015)",
      description: "The impact of debris on marine life. Marine Pollution Bulletin, 92(1–2), 170–179.",
      url: "https://doi.org/10.1016/j.marpolbul.2014.12.041"
    },
    {
      title: "United Nations Environment Programme (2018)",
      description: "Single-use plastics: A roadmap for sustainability.",
      url: "https://www.unep.org/resources/report/single-use-plastics-roadmap-sustainability"
    },
    {
      title: "United Nations Environment Programme (2023)",
      description: "World leaders set sights on plastic pollution.",
      url: "https://www.unep.org/news-and-stories/story/world-leaders-set-sights-plastic-pollution"
    },
    {
      title: "National Oceanic and Atmospheric Administration (2024)",
      description: "How long until it's gone? Marine debris decomposition timeline.",
      url: "https://marinedebris.noaa.gov/discover-issue/types-marine-debris/how-long-until-its-gone"
    },
    {
      title: "Global Alliance for Incinerator Alternatives (2019)",
      description: "Plastics exposed: How waste assessments & brand audits are helping Philippine cities fight plastic pollution.",
      url: "https://www.no-burn.org/plastics-exposed-how-waste-assessments-and-brand-audits-are-helping-philippine-cities-fight-plastic-pollution"
    },
    {
      title: "United Nations Educational, Scientific and Cultural Organization (2023)",
      description: "Plastic pollution facts.",
      url: "https://www.unesco.org/en/plastic-pollution/facts"
    }
  ];

  return (
    <section id="sources" className="py-12 bg-background border-t border-border" tabIndex={-1}>
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
                className="font-medium text-primary-light hover:brightness-110 transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
              >
                {source.title}
              </a>
              <span className="text-muted-foreground"> – {source.description} </span>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light hover:brightness-110 transition-all duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-primary rounded-sm"
              >
                Read here
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-8 pt-4 border-t border-border">
          Last updated: September 27, 2025 (UTC+8)
        </p>

        {/* Photo Credits Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-bold mb-4 text-foreground">Photo Credits</h3>
          <p className="text-xs text-muted-foreground mb-4">
            All images on this site are from real photographers and are used under free licenses. We thank the following contributors:
          </p>
          <div className="space-y-2 text-xs text-muted-foreground">
            <div>
              <span className="font-medium">Hero Images:</span> Naja Bertolt Jensen, Dustan Woodhouse, Brian Yurasits, Sergei Wing, Catherine Sheila (
              <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Unsplash</a>)
            </div>
            <div>
              <span className="font-medium">Statistics Section:</span> Naja Bertolt Jensen (
              <a href="https://unsplash.com/photos/_qhzF4XxYFE" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Unsplash</a>)
            </div>
            <div>
              <span className="font-medium">Educational Section:</span> Pawel Czerwinski (
              <a href="https://unsplash.com/photos/FV3GConVSss" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Unsplash</a>)
            </div>
            <div>
              <span className="font-medium">Solutions Section:</span> Bluewater Sweden (
              <a href="https://unsplash.com/photos/XMFZqrGyV-Q" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Unsplash</a>)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};