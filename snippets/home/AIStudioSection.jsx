export const AIStudioSection = () => {
  const items = [
    {
      icon: "layer-group",
      title: "Building Agents...",
      description: "Learn how to enable seamless collaboration with Box tools like Box Canvas, Box Notes.",
      href: "#",
    },
    {
      icon: "layer-group",
      title: "Headline 2",
      description: "Learn how to enable seamless collaboration with Box tools like Box Canvas, Box Notes.",
      href: "#",
    },
    {
      icon: "layer-group",
      title: "Headline 3",
      description: "Learn how to enable seamless collaboration with Box tools like Box Canvas, Box Notes.",
      href: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pb-12">
      {/* Left side - Items list */}
      <div className="flex flex-col gap-6">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-4 py-4 px-2 border-b-0 rounded-xl transition-colors duration-200 no-underline hover:bg-gray-50 dark:hover:bg-gray-900/50 group last:border-b-0"
          >
            {/* Icon wrapper */}
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-black">
              <Icon icon={item.icon} size={24} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="m-0 mb-1 text-base font-semibold">{item.title}</h3>
              <p className="m-0 text-sm flex text-[#3e4145] dark:text-[#9ea1a5] leading-relaxed">{item.description}</p>
            </div>

            {/* Arrow icon */}
            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="8 4 14 10 8 16"></polyline>
              </svg>
            </div>
          </a>
        ))}
      </div>

      {/* Right side - Image */}
      <div className="rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl dark:shadow-gray-900/50 max-h-[400px]">
        <img
          noZoom
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
          alt="AI Studio promotional image"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
};
