export const TryDemos = () => {
  const demos = [
    {
      id: "summary",
      title: "Get a summary",
      description: "Summarize a document in a selected tone of voice.",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["DEMO"],
      href: "/ai-dev-zone-summary/",
    },
    {
      id: "freeform",
      title: "Extract metadata from files (freeform)",
      description: "Use natural language, or pass a stringified data structure to extract metadata with Box AI API.",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["DEMO"],
      href: "/ai-dev-zone-metadata/",
    },
    {
      id: "structured",
      title: "Extract metadata from files (structured)",
      description:
        "Extract document metadata suggestions. Pass a Box metadata template ID or a predefined data structure.",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["DEMO"],
      href: "/ai-dev-zone-metadata-structured/",
    },
    {
      id: "enhanced",
      title: "Use Box AI Enhanced Extract Agent",
      description:
        "Extract document metadata suggestions with the new Enhanced Extract Agent. Get the best answers thanks to chain-of-thought processing.",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["NEW", "TUTORIAL"],
      href: "https://medium.com/box-developer-blog/box-ai-enhanced-extract-agent-a-developers-guide-41eb59b2cc54",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Try out interactive demos</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Box AI API is available to all customers Business and above.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {demos.map((demo) => (
          <a
            key={demo.id}
            href={demo.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <img src={demo.icon} alt={demo.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{demo.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{demo.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {demo.badges.map((badge, idx) => (
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

export const TryDemosJA = () => {
  const demos = [
    {
      id: "summary",
      title: "要約を取得する",
      description: "選択した語調でドキュメントを要約します。",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["デモ"],
      href: "/ai-dev-zone-summary/",
    },
    {
      id: "freeform",
      title: "ファイルからメタデータを抽出する (自由形式)",
      description: "自然言語を使用するか文字列化したデータ構造を渡して、Box AI APIでメタデータを抽出します。",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["デモ"],
      href: "/ai-dev-zone-metadata/",
    },
    {
      id: "structured",
      title: "ファイルからメタデータを抽出する (構造化)",
      description:
        "ドキュメントのメタデータの候補を抽出します。BoxメタデータテンプレートIDまたはあらかじめ定義されたデータ構造を渡します。",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["デモ"],
      href: "/ai-dev-zone-metadata-structured/",
    },
    {
      id: "enhanced",
      title: "Box AI抽出エージェント (強化) を使用する",
      description:
        "新しい抽出エージェント (強化) を使用して、ドキュメントのメタデータの候補を抽出します。思考連鎖処理により最良の回答が得られます。",
      icon: "/static/ai-dev-zone/icon-ai.svg",
      badges: ["新着", "チュートリアル"],
      href: "https://medium.com/box-developer-blog/box-ai-enhanced-extract-agent-a-developers-guide-41eb59b2cc54",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">対話型のデモをお試しください</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Box AI APIは、Business以上をご利用のすべてのお客様が利用できます。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {demos.map((demo) => (
          <a
            key={demo.id}
            href={demo.href}
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all group"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <img src={demo.icon} alt={demo.title} className="w-12 h-12" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{demo.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">{demo.description}</p>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap">
              {demo.badges.map((badge, idx) => (
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
