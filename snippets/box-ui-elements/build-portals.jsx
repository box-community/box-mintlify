export const BuildPortals = () => {
  const cards = [
    {
      id: "blog",
      type: "BLOG POST",
      title: "Build a content portal using Box UI Elements",
      cardTitle: "Read more about creating custom portals",
      description: "Build a content portal with a customized experience using Box UI Elements.",
      image: "/static/box-ui-elements/image-BUIE-portal.png",
      href: "https://medium.com/box-developer-blog/build-a-content-portal-using-box-ui-elements-react-tailwind-css-vercel-part-1-f1c509621ceb",
    },
    {
      id: "sample",
      type: "SAMPLE CODE",
      title: "Box Custom Portal Demo",
      cardTitle: "Clone and deploy a demo project",
      description: "Featuring Box APIs, Box UI Elements, React, Tailwind CSS, and Vercel.",
      image: "/static/box-ui-elements/image-BUIE-sample.png",
      href: "https://github.com/box-community/box-custom-portal-demo?tab=readme-ov-file#box-custom-portal-demo",
    },
    {
      id: "video",
      type: "VIDEO DEMO",
      title: "Box AI in Content Preview UI Element",
      cardTitle: "Box AI for Box UI Elements",
      description: "See how to embed Box AI in the Content Preview UI Element.",
      image: "/static/box-ui-elements/image-BUIE-AI.png",
      hasVideoBadge: true,
      href: "https://www.youtube.com/watch?v=8DmMgkm-6Tw",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Build custom portals</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Learn more from videos, blog posts and sample code related to Box UI Elements.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className="group flex flex-col rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-shadow hover:border-blue-500 dark:hover:border-blue-500"
          >
            {/* Image Section with padding */}
            <div className="p-3">
              <div className="relative bg-blue-900 dark:bg-blue-950 rounded-xl overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full" />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-3 pb-3 flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{card.cardTitle}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export const BuildPortalsJA = () => {
  const cards = [
    {
      id: "blog",
      type: "BLOG POST",
      title: "Build a content portal using Box UI Elements",
      cardTitle: "カスタムポータルの作成の詳細を確認する",
      description: "Box UI Elementsを使用して、エクスペリエンスをカスタマイズしたコンテンツポータルを構築します。",
      image: "/static/box-ui-elements/image-BUIE-portal.png",
      href: "https://medium.com/box-developer-blog/build-a-content-portal-using-box-ui-elements-react-tailwind-css-vercel-part-1-f1c509621ceb",
    },
    {
      id: "sample",
      type: "SAMPLE CODE",
      title: "Box Custom Portal Demo",
      cardTitle: "デモプロジェクトを複製して展開する",
      description: "Box API、Box UI Elements、React、Tailwind CSS、Vercelについて説明します。",
      image: "/static/box-ui-elements/image-BUIE-sample.png",
      href: "https://github.com/box-community/box-custom-portal-demo?tab=readme-ov-file#box-custom-portal-demo",
    },
    {
      id: "video",
      type: "VIDEO DEMO",
      title: "Box AI in Content Preview UI Element",
      cardTitle: "Box AI for Box UI Elements",
      description: "コンテンツプレビューUI ElementにBox AIを埋め込む方法を確認できます。",
      image: "/static/box-ui-elements/image-BUIE-AI.png",
      hasVideoBadge: true,
      href: "https://www.youtube.com/watch?v=8DmMgkm-6Tw",
    },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">カスタムポータルの構築</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Box UI Elementsに関連した動画、ブログ記事、サンプルコードで詳細を確認しましょう。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            className="group flex flex-col rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 transition-shadow hover:border-blue-500 dark:hover:border-blue-500"
          >
            {/* Image Section with padding */}
            <div className="p-3">
              <div className="relative bg-blue-900 dark:bg-blue-950 rounded-xl overflow-hidden">
                <img src={card.image} alt={card.title} className="w-full" />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-3 pb-3 flex-1">
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{card.cardTitle}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
