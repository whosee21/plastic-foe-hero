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
            All images on this site are authentic photographs from real photographers, used under free licenses. We thank the following contributors:
          </p>
          <div className="space-y-3 text-xs text-muted-foreground">
            <div>
              <span className="font-medium">Hero Slideshow:</span>
              <ul className="ml-4 mt-1 space-y-1">
                <li>• <a href="https://unsplash.com/photos/eTNGOHCrWtg" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Naja Bertolt Jensen</a> (Unsplash) - Plastic bag in ocean</li>
                <li>• <a href="https://www.pexels.com/photo/pile-of-garbage-3856436/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Tom Fisk</a> (Pexels) - Landfill waste</li>
                <li>• <a href="https://unsplash.com/photos/5fbJMCzqNDs" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Brian Yurasits</a> (Unsplash) - Plastic bottles on beach</li>
                <li>• <a href="https://unsplash.com/photos/3TKMIxWJQhg" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">NOAA</a> (Unsplash) - Sea turtle entangled in fishing gear</li>
                <li>• <a href="https://unsplash.com/photos/FfbVFLAVscw" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Sunyu Kim</a> (Unsplash) - Microplastics contamination</li>
              </ul>
            </div>
            <div>
              <span className="font-medium">Statistics Section:</span> <a href="https://www.pexels.com/photo/body-of-water-802221/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Yogendra Singh</a> (Pexels)
            </div>
            <div>
              <span className="font-medium">Educational Section:</span> <a href="https://www.pexels.com/photo/plastic-bottles-and-container-3612373/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Magda Ehlers</a> (Pexels)
            </div>
            <div>
              <span className="font-medium">Solutions Section:</span> <a href="https://www.pexels.com/photo/reusable-bottles-on-wooden-surface-4386346/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:brightness-110">Anna Shvets</a> (Pexels)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};