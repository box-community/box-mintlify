export const AIIntegrations = () => {
  const integrations = [
    {
      id: "langchain-js",
      title: "LangChain.js",
      description: "Include Box content in your LLM workflows with Box loader for LangChain.js.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["NEW", "INTEGRATION"],
      href: "https://www.npmjs.com/package/langchainjs-box",
    },
    {
      id: "openflow",
      title: "Openflow Connector for Box",
      description:
        "Seamlessly connect unstructured content in Box with the powerful analytics capabilities of Snowflake, unlocking new insights and automating data-driven workflows.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["INTEGRATION"],
      href: "https://docs.snowflake.com/en/user-guide/data-integration/openflow/connectors/box/setup",
    },
    {
      id: "airbyte",
      title: "Airbyte",
      description:
        "Transform unstructured documents into structured, queryable data by using the 'Box data extract', an Airbyte source connector.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["INTEGRATION"],
      href: "https://github.com/box-community/airbyte/blob/barduinor/source-box-devrel/docs/integrations/sources/box-data-extract.md",
    },
    {
      id: "weaviate",
      title: "Weaviate",
      description:
        "Build RAG workflows by embedding Box content into a Weaviate vector database and leveraging Weaviate's new Query Agent.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["INTEGRATION"],
      href: "https://medium.com/box-developer-blog/weaviate-box-rag-recipe-with-weaviate-query-agent-1cb41cf9e68b",
    },
    {
      id: "pinecone",
      title: "Pinecone",
      description: "Connect Box and Pinecone to customize vector embeddings and get more relevant answers from LLM.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["INTEGRATION"],
      href: "https://medium.com/box-developer-blog/demo-box-pinecone-f03783c412bb",
    },
    {
      id: "llamaindex",
      title: "LlamaIndex",
      description: "Enable access to Box content within LLM workflows with Box reader suite for LlamaIndex.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["INTEGRATION"],
      href: "https://github.com/run-llama/llama_index/tree/main/llama-index-integrations/readers/llama-index-readers-box#readme",
    },
    {
      id: "langchain",
      title: "LangChain",
      description: "Include Box content in your LLM workflows with Box loader for LangChain.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["INTEGRATION"],
      href: "https://python.langchain.com/docs/integrations/providers/box/",
    },
    {
      id: "pydantic-mcp",
      title: "Pydantic AI and Box MCP",
      description: "Use the Box MCP server to augment Pydantic AI agents with secure content in Box.",
      icon: "https://raw.githubusercontent.com/WriteChoiceMigration/host-box-images/360e8c62c90967e72398b457df4c5b7de92d627c/static/ai-dev-zone/langchain.svg",
      badges: ["DEMO"],
      href: "https://github.com/box-community/box-mcp-pydantic-ai",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Box for AI Integrations</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Use Box for AI Integrations to extend LLM models' existing knowledge bases.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {integrations.map((integration) => (
          <a
            target="_blank"
            key={integration.id}
            href={integration.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <img src={integration.icon} alt={integration.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{integration.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{integration.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {integration.badges.map((badge, idx) => (
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
