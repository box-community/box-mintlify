const { useState } = React;

export const ExploreMore = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: "ai",
      title: "Box AI for UI Elements",
      description: "See how to embed Box AI in the Content Preview UI Element.",
      img: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/box-ui-elements/icon-ai.svg",
      href: "/guides/embed/ui-elements/preview/#box-ai-for-ui-elements",
    },
    {
      id: "uploader",
      title: "Content Uploader",
      description: "Embed the Content Uploader and allow users to upload files.",
      img: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/box-ui-elements/content.svg",
      href: "/guides/embed/ui-elements/uploader/",
    },
    {
      id: "metadata",
      title: "Metadata view",
      description: "Display files based on specified metadata with the Content Explorer.",
      img: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/box-ui-elements/metadata.svg",
      href: "/guides/embed/ui-elements/explorer/#metadata-view",
    },
    {
      id: "annotations",
      title: "Annotations",
      description: "Provide collaboration capabilities within the Content Preview.",
      img: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/box-ui-elements/annotations.svg",
      href: "/guides/embed/ui-elements/annotations/",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Explore more Box UI Elements</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-12">Follow more guides and documentation to help get you up and running.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
            className={`p-6 rounded-lg transition-all duration-300 cursor-pointer bg-white dark:bg-gray-900 ${
              hoveredCard === card.id
                ? "border border-blue-500"
                : "border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <img src={card.img} alt={`${card.title} icon`} className="w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
