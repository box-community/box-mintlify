export const AIAgents = () => {
  const agents = [
    {
      id: "box-ai-studio",
      title: "Manage agents with Box AI Studio API",
      description: "Create and manage custom AI agents with Box AI Studio API.",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["NEW", "BOX AI STUDIO"],
      href: "/guides/ai-studio/getting-started-ai-studio/",
    },
    {
      id: "agentforce",
      title: "Box for Agentforce Extension package",
      description:
        "Get started with reusable Agentforce actions that help automate workflows and enhance intelligent agent—based processes within Salesforce.",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["NEW", "SALESFORCE"],
      href: "/guides/tooling/salesforce-toolkit/box-agentforce-package/",
    },
    {
      id: "multi-agent",
      title: "Multi-agent workflows with Box and OpenAI",
      description:
        "Use OpenAI Responses API and a Box Agent to add unstructured data from your Box instance into your agentic workflows.",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["OPENAI"],
      href: "https://medium.com/box-developer-blog/building-multi-agent-workflows-with-openais-new-sdk-and-box-3e3c81cf4715",
    },
    {
      id: "toolkit",
      title: "Box AI Agents Toolkit",
      description: "Get started with a Python library for building AI agents for Box.",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["BETA"],
      href: "https://pypi.org/project/box-ai-agents-toolkit/",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AI agents</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Learn how to create advanced AI agents with Box.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {agents.map((agent) => (
          <a
            key={agent.id}
            href={agent.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <img src={agent.icon} alt={agent.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{agent.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{agent.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {agent.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    badge === "NEW"
                      ? "bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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

export const AIAgentsJA = () => {
  const agents = [
    {
      id: "ai-studio",
      title: "Box AI Studio APIを使用したエージェントの管理",
      description: "Box AI Studio APIを使用してカスタムAIエージェントを作成および管理します。",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["新着", "Box AI Studio"],
      href: "/guides/ai-studio/getting-started-ai-studio/",
    },
    {
      id: "agentforce",
      title: "Box for Agentforce拡張パッケージ",
      description:
        "Salesforce内でワークフローを自動化したり、インテリジェントなエージェントベースのプロセスを強化したりするのに役立つ、再利用可能なAgentforceアクションの利用を開始します。",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["新着", "Salesforce"],
      href: "/guides/tooling/salesforce-toolkit/box-agentforce-package/",
    },
    {
      id: "openai-workflow",
      title: "BoxとOpenAIを使用したマルチエージェントワークフロー",
      description:
        "OpenAI Responses APIとBoxエージェントを使用して、Boxインスタンスからエージェント型ワークフローに非構造化データを追加します。",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["OpenAI"],
      href: "https://medium.com/box-developer-blog/building-multi-agent-workflows-with-openais-new-sdk-and-box-3e3c81cf4715",
    },
    {
      id: "ai-agents-toolkit",
      title: "Box AI Agents Toolkit",
      description: "BoxのAIエージェントを作成するためのPythonライブラリの利用を開始します。",
      icon: "/static/ai-dev-zone/ai-agents.svg",
      badges: ["ベータ"],
      href: "https://pypi.org/project/box-ai-agents-toolkit/",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">AIエージェント</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
        Boxで高度なAIエージェントを作成する方法を確認します。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {agents.map((agent) => (
          <a
            key={agent.id}
            href={agent.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <img src={agent.icon} alt={agent.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{agent.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{agent.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {agent.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    badge === "新着"
                      ? "bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-200"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
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
