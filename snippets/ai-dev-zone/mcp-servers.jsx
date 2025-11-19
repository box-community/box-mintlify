export const MCPServers = () => {
  const servers = [
    {
      id: "remote-mcp",
      title: "Remote Box MCP server",
      description:
        "The remote Box MCP server allows third party AI systems to securely connect and interact with your content in Box.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/mcp.svg",
      badges: ["NEW", "MCP"],
      href: "/guides/box-mcp/remote/",
    },
    {
      id: "self-hosted-mcp",
      title: "Self-hosted Box MCP server",
      description:
        "A Python Developer Community open source project. It integrates with the Box API to perform various operations such as file search, text extraction, AI-based querying, and data extraction.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/mcp.svg",
      badges: ["MCP"],
      href: "/guides/box-mcp/self-hosted/",
    },
    {
      id: "build-ai-apps",
      title: "Build AI Apps with MCP Servers",
      description:
        "Join a short online course, built in partnership with Deeplearning.ai, and taught by Ben Kus, Box CTO.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/mcp.svg",
      badges: ["SHORT COURSE"],
      href: "https://www.deeplearning.ai/short-courses/build-ai-apps-with-mcp-server-working-with-box-files/",
    },
    {
      id: "doc-gen-mcp",
      title: "Box MCP server and Pydantic AI",
      description: "Use Box Doc Gen through the Box MCP server for AI-Powered Document Generation.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/mcp.svg",
      badges: ["TUTORIAL"],
      href: "https://medium.com/box-developer-blog/building-ai-powered-document-generation-with-box-mcp-and-pydantic-ai-48775b18ae32",
    },
    {
      id: "langchain-mcp",
      title: "Box MCP server and LangChain MCP Adapters",
      description: "Turn Box MCP server into a LangChain-compatible agent using the LangChain MCP Adapters.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/mcp.svg",
      badges: ["TUTORIAL"],
      href: "https://medium.com/box-developer-blog/using-an-existing-mcp-server-with-langchain-mcp-adapters-94cdd4af6d1b",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">MCP Servers</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">These resources will get you up and running with Box MCP server.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {servers.map((server) => (
          <a
            key={server.id}
            href={server.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <img src={server.icon} alt={server.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{server.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{server.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {server.badges.map((badge, idx) => (
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
