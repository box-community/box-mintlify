export const Videos = () => {
  const videos = [
    {
      id: "platform-overview",
      label: "OVERVIEW",
      title: "Box AI Platform API",
      subtitle: "AI API overview",
      description: "Check out the high-level features of the Box AI API in one minute.",
      image: "/static/ai-dev-zone/image-AI-API.png",
      href: "https://www.youtube.com/watch?v=amhOj0YRVRQ&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "text-gen",
      label: "GET STARTED",
      title: "Box AI API - Text Generation",
      subtitle: "Endpoint overview",
      description: "See a demo of the Box AI API text generation endpoint.",
      image: "/static/ai-dev-zone/image-API-text-gen.png",
      href: "https://www.youtube.com/watch?v=xxR8aF4r3g8&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "doc-qa",
      label: "GET STARTED",
      title: "Box AI API - Document Q&A",
      subtitle: "Endpoint overview",
      description: "See a demo of the Box AI API document Q&A endpoint.",
      image: "/static/ai-dev-zone/image-API-qa.png",
      href: "https://www.youtube.com/watch?v=UyKfacz6G9g&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "extract-freeform",
      label: "GET STARTED",
      title: "Box AI API - Extract",
      subtitle: "Endpoint overview",
      description: "Extract metadata with various prompt formats with Box AI API.",
      image: "/static/ai-dev-zone/image-API-extract.png",
      href: "https://www.youtube.com/watch?v=fijj0CX67c4&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "extract-structured",
      label: "GET STARTED",
      title: "Box AI API - Extract Structured",
      subtitle: "Endpoint overview",
      description: "Extract metadata with predefined structure with Box AI API.",
      image: "/static/ai-dev-zone/image-API-extract-structured.png",
      href: "https://www.youtube.com/watch?v=dU3oo4sHZt0&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "cpo-interview",
      label: "INTERVIEW",
      title: "Why it matters?",
      subtitle: "Hear from Box CPO Diego Dugalski",
      description: "Learn why Box chose to expose box AI through our public API.",
      image: "/static/ai-dev-zone/image-API-interview.png",
      href: "https://www.youtube.com/watch?v=NA4NiqBdSg4&t=2s",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Videos</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">Watch the latest Box AI API tutorials and demos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            target="_blank"
            key={video.id}
            href={video.href}
            className="group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
          >
            {/* Image Section with padding */}
            <div className="p-3">
              <div className="relative bg-blue-900 dark:bg-blue-950 rounded-lg overflow-hidden">
                <img src={video.image} alt={video.title} className="w-full" />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-3 pb-3 flex-1">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">{video.label}</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{video.subtitle}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const VideosJA = () => {
  const videos = [
    {
      id: "ai-api-overview",
      label: "GET STARTED",
      title: "AI APIの概要",
      subtitle: "",
      description: "Box AI APIの主要な機能を1分程で確認できます。",
      image: "/static/ai-dev-zone/image-AI-API.png",
      href: "https://www.youtube.com/watch?v=amhOj0YRVRQ&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "text-gen-endpoint",
      label: "GET STARTED",
      title: "エンドポイントの概要",
      subtitle: "",
      description: "Box AI APIのテキスト生成エンドポイントのデモをご確認ください。",
      image: "/static/ai-dev-zone/image-API-text-gen.png",
      href: "https://www.youtube.com/watch?v=xxR8aF4r3g8&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "qa-endpoint",
      label: "GET STARTED",
      title: "エンドポイントの概要",
      subtitle: "",
      description: "Box AI APIのドキュメントのQ&Aエンドポイントのデモをご確認ください。",
      image: "/static/ai-dev-zone/image-API-qa.png",
      href: "https://www.youtube.com/watch?v=UyKfacz6G9g&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "extract-endpoint",
      label: "GET STARTED",
      title: "エンドポイントの概要",
      subtitle: "",
      description: "Box AI APIを使用して、さまざまなプロンプトの形式でメタデータを抽出します。",
      image: "/static/ai-dev-zone/image-API-extract.png",
      href: "https://www.youtube.com/watch?v=fijj0CX67c4&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "extract-structured",
      label: "GET STARTED",
      title: "エンドポイントの概要",
      subtitle: "",
      description: "Box AI APIを使用して、あらかじめ定義された構造でメタデータを抽出します。",
      image: "/static/ai-dev-zone/image-API-extract-structured.png",
      href: "https://www.youtube.com/watch?v=dU3oo4sHZt0&list=PLCSEWOlbcUyI2ta24oRr75_4igvMzKJ9q",
    },
    {
      id: "cpo-interview",
      label: "GET STARTED",
      title: "Box CPOのDiego Dugatkinによる説明",
      subtitle: "",
      description: "Boxが公開APIを介してBox AIを公開することを選択した理由をご確認ください。",
      image: "/static/ai-dev-zone/image-API-interview.png",
      href: "https://www.youtube.com/watch?v=NA4NiqBdSg4&t=2s",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">動画</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Box AI APIに関する最新のチュートリアルやデモをご覧ください。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            target="_blank"
            key={video.id}
            href={video.href}
            className="group flex flex-col rounded-lg overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
          >
            {/* Image Section with padding */}
            <div className="p-3">
              <div className="relative bg-blue-900 dark:bg-blue-950 rounded-lg overflow-hidden">
                <img src={video.image} alt={video.title} className="w-full" />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-3 pb-3 flex-1">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">{video.label}</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{video.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{video.subtitle}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
