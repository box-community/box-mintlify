export const CustomCard = ({ icon, title, href, tags, children, ...props }) => {
  const handleClick = (e) => {
    if (href) {
      e.preventDefault();
      window.location.href = href;
    }
  };

  const getDescription = () => {
    // Get description from children
    if (children) {
      if (typeof children === "string") {
        return children;
      } else {
        const childrenArray = Array.isArray(children) ? children : [children];

        // Find the first text/description element
        for (const child of childrenArray) {
          if (typeof child === "string") {
            return child;
          } else if (child && typeof child === "object" && child.props?.children) {
            const childText = child.props.children;
            if (typeof childText === "string") {
              return childText;
            }
          }
        }
      }
    }
    return null;
  };

  const description = getDescription();

  // Detect if icon is a custom SVG path or Font Awesome icon name
  const isCustomSvg = icon?.includes('/') || icon?.includes('.svg');
  const iconSize = isCustomSvg ? 48 : 24; // Font Awesome icons need smaller size

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex flex-col p-6 rounded-lg border transition-all duration-200 cursor-pointer text-inherit no-underline box-border mb-3
        border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-900
        hover:border-blue-500 dark:hover:border-blue-400
        hover:shadow-md dark:hover:shadow-lg"
      {...props}
    >
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
        <div className="flex items-center justify-center w-full h-full">
          <Icon icon={icon} size={iconSize} />
        </div>
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-50 mb-3 text-left break-words mt-0">{title}</h3>
      {description && (
        <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 flex-1">{description}</div>
      )}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {tags.map((tag, index) => {
            const bgColor = tag.bgColor || tag.backgroundColor || "#e5e7eb";
            return (
              <span
                key={index}
                className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-gray-900"
                style={{ backgroundColor: bgColor }}
              >
                {tag.text || tag.label}
              </span>
            );
          })}
        </div>
      )}
    </a>
  );
};
