/**
 * RelatedLinks Component
 *
 * Displays a list of related links with badges, commonly used for "Related Guides" or "Related APIs"
 *
 * @param {string} title - The section title (e.g., "RELATED GUIDES", "RELATED APIS")
 * @param {Array} items - Array of link objects with the following structure:
 *   - label: Link text to display
 *   - href: URL for the link
 *   - badge: Badge text (e.g., "GUIDE", "POST", "GET")
 *   - Badge colors are automatically applied via CSS classes with dark mode support
 *
 * @example
 * <RelatedLinks
 *   title="RELATED GUIDES"
 *   items={[
 *     { label: "Ask questions to Box AI", href: "/guides/box-ai/ask", badge: "GUIDE" },
 *     { label: "Generate text with Box AI", href: "/guides/box-ai/generate", badge: "GUIDE" }
 *   ]}
 * />
 */
export const RelatedLinks = ({ title, items = [] }) => {
  // Get badge CSS class based on badge type
  const getBadgeClass = (badge) => {
    if (!badge) return "badge-default";

    // Map badge types to CSS classes
    const badgeType = badge.toLowerCase().replace(/\s+/g, "-");
    return `badge-${badgeType}`;
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      {/* Title */}
      <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{title}</h3>

      {/* Links list */}
      <div className="flex flex-col gap-3">
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="py-2 px-3 rounded related_link hover:bg-[#f2f2f2] flex items-center gap-3 group no-underline hover:no-underline border-b-0"
          >
            {/* Badge */}
            <span
              className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide flex-shrink-0 ${getBadgeClass(
                item.badge
              )}`}
            >
              {item.badge}
            </span>

            {/* Link text */}
            <span className="text-base">{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

/**
 * MultiRelatedLinks Component
 *
 * Displays multiple sections of related links (e.g., both "Related APIs" and "Related Guides")
 *
 * @param {Array} sections - Array of section objects with:
 *   - title: Section title
 *   - items: Array of link objects (same structure as RelatedLinks)
 *
 * @example
 * <MultiRelatedLinks
 *   sections={[
 *     {
 *       title: "RELATED APIS",
 *       items: [{ label: "Ask question", href: "/reference/post-ask", badge: "POST" }]
 *     },
 *     {
 *       title: "RELATED GUIDES",
 *       items: [{ label: "Get started with Box AI", href: "/guides/box-ai", badge: "GUIDE" }]
 *     }
 *   ]}
 * />
 */
export const MultiRelatedLinks = ({ sections = [] }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <RelatedLinks key={index} title={section.title} items={section.items} />
      ))}
    </div>
  );
};
