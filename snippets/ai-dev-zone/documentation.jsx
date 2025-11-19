export const Documentation = () => {
  const resources = [
    {
      id: "api-reference",
      title: "Box AI API reference",
      description: "Check the API reference for specification details.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/code.svg",
      badges: ["DOCUMENTATION"],
      href: "/reference/resources/ai-response/",
    },
    {
      id: "get-started",
      title: "Get started with Box AI API",
      description: "Browse the guides to learn how to use Box AI API.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/code.svg",
      badges: ["DOCUMENTATION"],
      href: "/guides/box-ai/",
    },
    {
      id: "ai-models",
      title: "Supported AI models",
      description:
        "Box supports a variety of AI models, categorized along two dimensions: access level and capability tier. Check table list of the supported AI models.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/code.svg",
      badges: ["DOCUMENTATION"],
      href: "/guides/box-ai/ai-models/",
    },
    {
      id: "override-config",
      title: "Override AI model configuration",
      description: "Override the default AI model configuration and fine tune LLMs with Box AI API.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/code.svg",
      badges: ["DOCUMENTATION"],
      href: "/guides/box-ai/ai-agents/ai-agent-overrides/",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Documentation</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">These resources will get you up and running with Box AI API.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {resources.map((resource) => (
          <a
            key={resource.id}
            href={resource.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <img src={resource.icon} alt={resource.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{resource.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{resource.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {resource.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    badge === "NEW" ? "bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
