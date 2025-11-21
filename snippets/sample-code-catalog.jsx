export const SampleCodeCatalog = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All languages");
  const [selectedTag, setSelectedTag] = useState("All tags");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);

  const sampleData = [
    {
      title: "Box AI Python Workshop",
      href: "https://github.com/barduinor/box-python-gen-workshop/blob/main/workshops/intelligence/intelligence.md",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Box Custom Portal Demo",
      href: "https://github.com/box-community/box-custom-portal-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "Box Web App Integration Demo with Vercel",
      href: "https://github.com/box-community/box-web-app-integration-demo",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["FRONTEND", "API"],
    },
    {
      title: "Metadata view in Content Explorer",
      href: "https://github.com/box-community/content-explorer-metadata",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node", "React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "Video Bookmarking Demo",
      href: "https://github.com/pchristensenB/box-videobookmarking-demo",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node", "JavaScript"],
      tags: ["API"],
    },
    {
      title: "Typescript SDK",
      href: "https://github.com/box-community/box-ts-sdk-react",
      icon: "/static/samples/typescript.svg",
      languages: ["TypeScript"],
      tags: ["SDK"],
    },
    {
      title: ".NET SDK Generated",
      href: "https://github.com/box/box-dotnet-sdk-gen?tab=readme-ov-file#box-dotnet-sdk-generated",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["SDK"],
    },
    {
      title: "Box TypeScript SDK GENERATED (beta)",
      href: "https://github.com/box/box-typescript-sdk-gen#box-typescript-sdk-generated",
      icon: "/static/samples/typescript.svg",
      languages: ["TypeScript"],
      tags: ["SDK"],
    },
    {
      title: "Get started: Box Node.js SDK & OAuth 2.0",
      href: "https://github.com/box-community/Box-node.js-SKD-with-OAuth-2.0",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SDK"],
    },
    {
      title: "Vercel Serverless Demo",
      href: "https://github.com/box-community/box-vercel-serverless-demo",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API", "WEBHOOKS"],
    },
    {
      title: "Mini Box Mediainfo Video Metadata Uploader",
      href: "https://github.com/box-community/mini-box-mediaInfo-video-metadata-uploader",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Diver Portal Demo",
      href: "https://github.com/box-community/ui-elements-sample-app",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "Angular Box UI Elements Quickstart",
      href: "https://github.com/SowaProgramuje/angular-box-ui-elements-cdn",
      icon: "/static/samples/angular.svg",
      languages: ["Angular", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "UI Elements Demo",
      href: "https://github.com/box-community/ui-elements-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "UI Elements Demo with JWT",
      href: "https://github.com/box-community/ui-elements-jwt",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "UI Elements Demo using Python",
      href: "https://github.com/box-community/ui-elements-python",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript", "Python"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "UI Elements Demo with OAuth 2.0",
      href: "https://github.com/box-community/ui-elements-oauth",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript", "Python"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "Sharing Folders using the Box CLI",
      href: "https://github.com/box-community/box-cli-100k/tree/main",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["CLI", "API"],
    },
    {
      title: "Box Metadata Media Uploader",
      href: "https://github.com/box-community/box-metadata-media/tree/main",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Vue.js Box UI Elements Quickstart",
      href: "https://github.com/SowaProgramuje/vue3-box-ui-elements-cdn",
      icon: "/static/samples/vue.js.svg",
      languages: ["Vue.js", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "Java SDK",
      href: "https://github.com/box/box-java-sdk/tree/main/src/example",
      icon: "/static/samples/java.svg",
      languages: ["Java"],
      tags: ["SDK"],
    },
    {
      title: "Box CLI",
      href: "https://github.com/box/boxcli/tree/main/examples",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["CLI", "PROVISIONING"],
    },
    {
      title: "Box UI Elements",
      href: "https://github.com/box/box-ui-elements/tree/master/examples",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: ".NET SDK",
      href: "https://github.com/box/box-windows-sdk-v2/tree/main/docs",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["SDK"],
    },
    {
      title: "Box Annotations",
      href: "https://github.com/box/box-annotations/tree/master/docs",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["FRONTEND"],
    },
    {
      title: "iOS SDK",
      href: "https://github.com/box/box-ios-sdk/tree/main/docs/usage",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "Node SDK",
      href: "https://github.com/box/box-node-sdk/tree/main/docs",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SDK"],
    },
    {
      title: "Box Python SDK GENERATED (beta)",
      href: "https://github.com/box/box-python-sdk-gen",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["SDK"],
    },
    {
      title: "Box Python SDK",
      href: "https://github.com/box/box-python-sdk/tree/main/docs/usage",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["SDK"],
    },
    {
      title: "Android Browse SDK",
      href: "https://github.com/box/box-android-browse-sdk",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "Android Share SDK",
      href: "https://github.com/box/box-android-share-sdk",
      icon: "/static/samples/java.svg",
      languages: ["Java", "Android"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "Content Preview",
      href: "https://github.com/box/box-content-preview",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["FRONTEND"],
    },
    {
      title: "UI Elements Demo",
      href: "https://github.com/box/box-ui-elements-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "FRONTEND"],
    },
    {
      title: "Skills Kit Nodejs",
      href: "https://github.com/box/box-skills-kit-nodejs",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Salesforce SDK",
      href: "https://github.com/box/box-salesforce-sdk/tree/master/doc",
      icon: "/static/samples/apex.svg",
      languages: ["APEX"],
      tags: ["SALESFORCE", "SDK"],
    },
    {
      title: "Android SDK (deprecated)",
      href: "https://github.com/box/box-android-sdk/tree/master/doc",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "iOS Preview SDK",
      href: "https://github.com/box/box-ios-preview-sdk",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "OpenAI Skill Demo",
      href: "https://github.com/box-community/box-open-ai-skill-demo",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "cURL Samples",
      href: "https://github.com/box-community/box-curl-samples",
      icon: "/static/samples/curl.svg",
      languages: ["cURL"],
      tags: ["API"],
    },
    {
      title: "Box Skills Starter Kit",
      href: "https://github.com/box-community/Box-Custom-Skills-Starter",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Authenticate with JWT Demo",
      href: "https://github.com/box-community/samples-docs-authenticate-with-jwt-api/blob/master/sample.js",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "JavaScript SDK",
      href: "https://github.com/box-community/box-javascript-sdk",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["SDK", "FRONTEND"],
    },
    {
      title: "Box for Salesforce Demo",
      href: "https://github.com/box-community/box-salesforce-demo",
      icon: "/static/samples/apex.svg",
      languages: ["APEX"],
      tags: ["SALESFORCE"],
    },
    {
      title: "JSON Ref Resolver",
      href: "https://github.com/box-community/json-ref-resolver",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["API", "FRONTEND"],
    },
    {
      title: "Python Administration Kit",
      href: "https://github.com/box-community/tool-python-admin-kit",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Sample JWT App Primer",
      href: "https://github.com/box-community/sample-jwt-app-primer",
      icon: "/static/samples/universal.svg",
      languages: ["Universal"],
      tags: ["API"],
    },
    {
      title: "Splunk Dashboards",
      href: "https://github.com/box-community/splunk-dashboards",
      icon: "/static/samples/universal.svg",
      languages: ["Universal"],
      tags: ["API"],
    },
    {
      title: "PowerShell SDK",
      href: "https://github.com/box-community/sdk-powershell-api-v2",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["SDK"],
    },
    {
      title: "Python Batch Folder Tree Rename",
      href: "https://github.com/box-community/tool-python-batch-folder-tree-rename",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Python Move Folder to Account",
      href: "https://github.com/box-community/tool-python-move-folder-to-account",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "PHP Simple User Reports",
      href: "https://github.com/box-community/tool-php-simple-user-reports",
      icon: "/static/samples/php.svg",
      languages: ["PHP"],
      tags: ["API"],
    },
    {
      title: "Perl Folder IDs to Paths",
      href: "https://github.com/box-community/tool-perl-folderids-to-paths",
      icon: "/static/samples/perl.svg",
      languages: ["Perl"],
      tags: ["API"],
    },
    {
      title: "iOS Browse SDK",
      href: "https://github.com/box/box-ios-browse-sdk",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "iOS Share SDK",
      href: "https://github.com/box/box-ios-share-sdk",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "Android Preview SDK",
      href: "https://github.com/box/box-android-preview-sdk",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "Android Simple Tooltip",
      href: "https://github.com/box/android-simple-tooltip",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["MOBILE"],
    },
    {
      title: "Box Content Preview Demo",
      href: "https://github.com/box/box-content-preview-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["FRONTEND"],
    },
    {
      title: "Java SDK Samples",
      href: "https://github.com/box/box-java-sdk-samples",
      icon: "/static/samples/java.svg",
      languages: ["Java"],
      tags: ["API"],
    },
    {
      title: ".NET Metadata SDK V2",
      href: "https://github.com/box/box-windows-metadata-sdk-v2",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["SDK", "API"],
    },
    {
      title: "Android App to App SDK",
      href: "https://github.com/box/box-android-apptoapp-sdk",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "MOBILE"],
    },
    {
      title: "Ruby SDK",
      href: "https://github.com/cburnette/boxr",
      icon: "/static/samples/ruby.svg",
      languages: ["Ruby"],
      tags: ["SDK"],
    },
    {
      title: "R SDK",
      href: "https://github.com/r-box/boxr",
      icon: "/static/samples/r.svg",
      languages: ["R"],
      tags: ["SDK"],
    },
    {
      title: "Box Jira Etsi Document Control",
      href: "https://github.com/goodgrid/etsi-document-control",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["API", "FRONTEND"],
    },
    {
      title: "Box PowerShell Automations",
      href: "https://github.com/kylefernandadams/box-powershell-automations",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["API", "PROVISIONING"],
    },
    {
      title: "Microsoft Azure Media Services Box Skill",
      href: "https://github.com/box-community/sample-video-skills/tree/master/microsoft-azure-faces-transcript-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Postman Collection",
      href: "https://developer.box.com/guides/tooling/postman/",
      icon: "/static/samples/universal.svg",
      languages: ["Universal"],
      tags: ["API"],
    },
    {
      title: "AWS Lambda Function to Save Logs",
      href: "https://github.com/kenji-toforone/box-auditlogs-node-es",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Python Async Rate Limiter",
      href: "https://github.com/jmfrank63/box-python-async-rate-limiter",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Box for Salesforce Blueprints",
      href: "https://github.com/kylefernandadams/box-for-salesforce-blueprints",
      icon: "/static/samples/apex.svg",
      languages: ["APEX"],
      tags: ["SALESFORCE"],
    },
    {
      title: "Leverton Lease Extraction",
      href: "https://github.com/box-community/sample-document-skills/tree/master/leverton-lease-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Rossum Invoice Intelligence",
      href: "https://github.com/box-community/sample-document-skills/tree/master/rossum-invoice-intelligence",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "IBM Watson Audio Transcript Extraction",
      href: "https://github.com/box-community/sample-audio-skills/tree/master/ibm-watson-transcript-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Microsoft Azure Audio Transcript Extraction",
      href: "https://github.com/box-community/sample-audio-skills/tree/master/microsoft-azure-transcript-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "VoiceBase Dual Channel Audio Analysis",
      href: "https://github.com/box-community/sample-audio-skills/tree/master/voicebase-callcenter-audio-analysis",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Acuant AssureID Box Skill",
      href: "https://github.com/box-community/sample-image-skills/tree/master/acuant-assureid-goverment-id-data-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Amazon Rekognition Label Extraction",
      href: "https://github.com/box-community/sample-image-skills/tree/master/amazon-rekognition-labels-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "EXIF/XMP MetaInfo Extraction",
      href: "https://github.com/box-community/sample-image-skills/tree/master/exiftool-metainfo-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Google Cloud Vision Product Search",
      href: "https://github.com/box-community/sample-image-skills/tree/master/google-product-search-integration",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Google Vision Image Extraction",
      href: "https://github.com/box-community/sample-image-skills/tree/master/google-vision-text-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Hive Predict Face Recognition",
      href: "https://github.com/box-community/sample-image-skills/tree/master/hive-predict-face-recognition",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Microsoft Vision Image Extraction",
      href: "https://github.com/box-community/sample-image-skills/tree/master/microsoft-vision-text-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "ASP.NET MVC 5 Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-aspnet-mvc-sk",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["API"],
    },
    {
      title: "Auth0 Angular 1 Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-auth0-angular1-skeleton-app-sample",
      icon: "/static/samples/angularjs.svg",
      languages: ["AngularJS", "JavaScript"],
      tags: ["API", "FRONTEND"],
    },
    {
      title: "Auth0 Angular 2 Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-auth0-angular2-skeleton-app-sample",
      icon: "/static/samples/angular.svg",
      languages: ["Angular", "JavaScript"],
      tags: ["API", "FRONTEND"],
    },
    {
      title: "Auth0 Swift Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-auth0-swift-skeleton-app-sample",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["API", "MOBILE"],
    },
    {
      title: "AWS Cognito Angular 2 Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-aws-cognito-angular2-skeleton-app-sample",
      icon: "/static/samples/angular.svg",
      languages: ["Angular", "JavaScript"],
      tags: ["API", "FRONTEND"],
    },
    {
      title: "Java Servlet Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-java-servlet-skeleton-app",
      icon: "/static/samples/java.svg",
      languages: ["Java"],
      tags: ["API"],
    },
    {
      title: "Node Cognito Lambdas Sample",
      href: "https://github.com/box/samples/tree/master/box-node-cognito-lambdas-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Custom Skills Sample",
      href: "https://github.com/box/samples/tree/master/box-node-custom-skills-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Node Express Skeleton App",
      href: "https://github.com/box/samples/tree/master/box-node-express-skeleton-app",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Lambda Sample",
      href: "https://github.com/box/samples/tree/master/box-node-lambda-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Rekognition Lambda Sample",
      href: "https://github.com/box/samples/tree/master/box-node-rekognition-lambdas-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Webhook to Lambda Sample",
      href: "https://github.com/box/samples/tree/master/box-node-webhook-to-lambda-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API", "WEBHOOKS"],
    },
  ];

  // Extract unique languages and tags
  const allLanguages = useMemo(() => {
    const languageSet = new Set();
    sampleData.forEach((sample) => {
      sample.languages.forEach((lang) => languageSet.add(lang));
    });
    return ["All languages", ...Array.from(languageSet).sort()];
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    sampleData.forEach((sample) => {
      sample.tags.forEach((tag) => tagSet.add(tag));
    });
    return ["All tags", ...Array.from(tagSet).sort()];
  }, []);

  // Filter samples based on selected filters
  const filteredSamples = useMemo(() => {
    return sampleData.filter((sample) => {
      const languageMatch = selectedLanguage === "All languages" || sample.languages.includes(selectedLanguage);
      const tagMatch = selectedTag === "All tags" || sample.tags.includes(selectedTag);
      return languageMatch && tagMatch;
    });
  }, [selectedLanguage, selectedTag]);

  const resetFilters = () => {
    setSelectedLanguage("All languages");
    setSelectedTag("All tags");
  };

  const hasActiveFilters = selectedLanguage !== "All languages" || selectedTag !== "All tags";

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setLanguageDropdownOpen(!languageDropdownOpen);
              setTagDropdownOpen(false);
            }}
            className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors min-w-[180px]"
          >
            <span className="text-sm text-gray-700 dark:text-gray-200">{selectedLanguage}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
              className={`transition-transform ${languageDropdownOpen ? "rotate-180" : ""}`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m6.644 5.76808 4.34-3.766.75-.651996c.08352-.067492.15088-.152810.19716-.249704.04628-.096896.07030-.202916.07030-.310296 0-.107379-.02402-.213399-.07030-.310295C11.88488.382894 11.81752.297576 11.734.230084c-.18088-.151486-.41008-.233093-.646-.22999963H.912C.408.00008474 0 .354084 0 .790084c0 .21.096.412.266.56l.77.667996 4.32 3.75c.18130.14956.40898.23136.644.23136s.46270-.0818.644-.23136Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {languageDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
              {allLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setLanguageDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    selectedLanguage === lang
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tag Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setTagDropdownOpen(!tagDropdownOpen);
              setLanguageDropdownOpen(false);
            }}
            className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors min-w-[180px]"
          >
            <span className="text-sm text-gray-700 dark:text-gray-200">{selectedTag}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
              className={`transition-transform ${tagDropdownOpen ? "rotate-180" : ""}`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m6.644 5.76808 4.34-3.766.75-.651996c.08352-.067492.15088-.152810.19716-.249704.04628-.096896.07030-.202916.07030-.310296 0-.107379-.02402-.213399-.07030-.310295C11.88488.382894 11.81752.297576 11.734.230084c-.18088-.151486-.41008-.233093-.646-.22999963H.912C.408.00008474 0 .354084 0 .790084c0 .21.096.412.266.56l.77.667996 4.32 3.75c.18130.14956.40898.23136.644.23136s.46270-.0818.644-.23136Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {tagDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag);
                    setTagDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    selectedTag === tag
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="px-4 py-2.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSamples.map((sample, index) => (
          <a
            key={index}
            href={sample.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <img src={sample.icon} alt={sample.languages.join(", ")} className="w-12 h-12 my-0" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{sample.title}</h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {sample.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* No results message */}
      {filteredSamples.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">No samples found matching your filters.</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export const SampleCodeCatalogJA = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("すべての言語");
  const [selectedTag, setSelectedTag] = useState("すべてのタグ");
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [tagDropdownOpen, setTagDropdownOpen] = useState(false);

  const sampleData = [
    {
      title: "Box AI Python\u30ef\u30fc\u30af\u30b7\u30e7\u30c3\u30d7",
      href: "https://github.com/barduinor/box-python-gen-workshop/blob/main/workshops/intelligence/intelligence.md",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Box\u30ab\u30b9\u30bf\u30e0\u30dd\u30fc\u30bf\u30eb\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/box-custom-portal-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title:
        "Vercel\u3092\u4f7f\u7528\u3057\u305fBox\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u7d71\u5408\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/box-web-app-integration-demo",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9", "API"],
    },
    {
      title:
        "\u30b3\u30f3\u30c6\u30f3\u30c4\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u30d3\u30e5\u30fc",
      href: "https://github.com/box-community/content-explorer-metadata",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node", "React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "\u52d5\u753b\u306e\u30d6\u30c3\u30af\u30de\u30fc\u30af\u6a5f\u80fd\u306e\u30c7\u30e2",
      href: "https://github.com/pchristensenB/box-videobookmarking-demo",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node", "JavaScript"],
      tags: ["API"],
    },
    {
      title: "Typescript SDK",
      href: "https://github.com/box-community/box-ts-sdk-react",
      icon: "/static/samples/typescript.svg",
      languages: ["TypeScript"],
      tags: ["SDK"],
    },
    {
      title: ".NET SDK Generated",
      href: "https://github.com/box/box-dotnet-sdk-gen?tab=readme-ov-file#box-dotnet-sdk-generated",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["SDK"],
    },
    {
      title: "Box TypeScript SDK GENERATED (\u30d9\u30fc\u30bf)",
      href: "https://github.com/box/box-typescript-sdk-gen#box-typescript-sdk-generated",
      icon: "/static/samples/typescript.svg",
      languages: ["TypeScript"],
      tags: ["SDK"],
    },
    {
      title: "\u306f\u3058\u3081\u306b: Box Node.js SDK\u304a\u3088\u3073OAuth 2.0",
      href: "https://github.com/box-community/Box-node.js-SKD-with-OAuth-2.0",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SDK"],
    },
    {
      title: "Vercel\u306e\u30b5\u30fc\u30d0\u30ec\u30b9\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/box-vercel-serverless-demo",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API", "WEBHOOK"],
    },
    {
      title:
        "Mini\u7248\u306eBox Mediainfo\u30d3\u30c7\u30aa\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c0\u30fc",
      href: "https://github.com/box-community/mini-box-mediaInfo-video-metadata-uploader",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Diver Portal\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/ui-elements-sample-app",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Angular Box UI Elements\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
      href: "https://github.com/SowaProgramuje/angular-box-ui-elements-cdn",
      icon: "/static/samples/angular.svg",
      languages: ["Angular", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "UI Elements\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/ui-elements-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "JWT\u3092\u4f7f\u7528\u3057\u305fUI Elements\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/ui-elements-jwt",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Python\u3092\u4f7f\u7528\u3057\u305fUI Elements\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/ui-elements-python",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript", "Python"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "OAuth 2.0\u3092\u4f7f\u7528\u3057\u305fUI Elements\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/ui-elements-oauth",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript", "Python"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Box CLI\u3092\u4f7f\u7528\u3057\u305f\u30d5\u30a9\u30eb\u30c0\u306e\u5171\u6709",
      href: "https://github.com/box-community/box-cli-100k/tree/main",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["CLI", "API"],
    },
    {
      title:
        "Box\u30e1\u30bf\u30c7\u30fc\u30bf\u306e\u30e1\u30c7\u30a3\u30a2\u30a2\u30c3\u30d7\u30ed\u30fc\u30c0\u30fc",
      href: "https://github.com/box-community/box-metadata-media/tree/main",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Vue.js Box UI Elements\u306e\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
      href: "https://github.com/SowaProgramuje/vue3-box-ui-elements-cdn",
      icon: "/static/samples/vue.js.svg",
      languages: ["Vue.js", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Java SDK",
      href: "https://github.com/box/box-java-sdk/tree/main/src/example",
      icon: "/static/samples/java.svg",
      languages: ["Java"],
      tags: ["SDK"],
    },
    {
      title: "Box CLI",
      href: "https://github.com/box/boxcli/tree/main/examples",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["CLI", "\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"],
    },
    {
      title: "Box UI Elements",
      href: "https://github.com/box/box-ui-elements/tree/master/examples",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: ".NET SDK",
      href: "https://github.com/box/box-windows-sdk-v2/tree/main/docs",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["SDK"],
    },
    {
      title: "Box\u306e\u6ce8\u91c8",
      href: "https://github.com/box/box-annotations/tree/master/docs",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "iOS SDK",
      href: "https://github.com/box/box-ios-sdk/tree/main/docs/usage",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "Node SDK",
      href: "https://github.com/box/box-node-sdk/tree/main/docs",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SDK"],
    },
    {
      title: "Box Python SDK GENERATED (\u30d9\u30fc\u30bf)",
      href: "https://github.com/box/box-python-sdk-gen",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["SDK"],
    },
    {
      title: "Box Python SDK",
      href: "https://github.com/box/box-python-sdk/tree/main/docs/usage",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["SDK"],
    },
    {
      title: "Android Browse SDK",
      href: "https://github.com/box/box-android-browse-sdk",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "Android Share SDK",
      href: "https://github.com/box/box-android-share-sdk",
      icon: "/static/samples/java.svg",
      languages: ["Java", "Android"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "\u30b3\u30f3\u30c6\u30f3\u30c4\u30d7\u30ec\u30d3\u30e5\u30fc",
      href: "https://github.com/box/box-content-preview",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "UI Elements\u306e\u30c7\u30e2",
      href: "https://github.com/box/box-ui-elements-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["UI ELEMENTS", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Skills Kit Nodejs",
      href: "https://github.com/box/box-skills-kit-nodejs",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Salesforce SDK",
      href: "https://github.com/box/box-salesforce-sdk/tree/master/doc",
      icon: "/static/samples/apex.svg",
      languages: ["APEX"],
      tags: ["SALESFORCE", "SDK"],
    },
    {
      title: "Android SDK (\u975e\u63a8\u5968)",
      href: "https://github.com/box/box-android-sdk/tree/master/doc",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "iOS Preview SDK",
      href: "https://github.com/box/box-ios-preview-sdk",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "OpenAI Skill\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/box-open-ai-skill-demo",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "cURL\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box-community/box-curl-samples",
      icon: "/static/samples/curl.svg",
      languages: ["cURL"],
      tags: ["API"],
    },
    {
      title: "Box Skills Starter Kit",
      href: "https://github.com/box-community/Box-Custom-Skills-Starter",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "JWT\u3092\u4f7f\u7528\u3057\u305f\u8a8d\u8a3c\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/samples-docs-authenticate-with-jwt-api/blob/master/sample.js",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "JavaScript SDK",
      href: "https://github.com/box-community/box-javascript-sdk",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["SDK", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Box for Salesforce\u306e\u30c7\u30e2",
      href: "https://github.com/box-community/box-salesforce-demo",
      icon: "/static/samples/apex.svg",
      languages: ["APEX"],
      tags: ["SALESFORCE"],
    },
    {
      title: "JSON Ref\u30ea\u30be\u30eb\u30d0",
      href: "https://github.com/box-community/json-ref-resolver",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["API", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Python\u7ba1\u7406\u30ad\u30c3\u30c8",
      href: "https://github.com/box-community/tool-python-admin-kit",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "\u30b5\u30f3\u30d7\u30ebJWT\u30a2\u30d7\u30ea\u5165\u9580",
      href: "https://github.com/box-community/sample-jwt-app-primer",
      icon: "/static/samples/universal.svg",
      languages: ["Universal"],
      tags: ["API"],
    },
    {
      title: "Splunk\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9",
      href: "https://github.com/box-community/splunk-dashboards",
      icon: "/static/samples/universal.svg",
      languages: ["Universal"],
      tags: ["API"],
    },
    {
      title: "PowerShell SDK",
      href: "https://github.com/box-community/sdk-powershell-api-v2",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["SDK"],
    },
    {
      title:
        "Python\u306b\u3088\u308b\u30d5\u30a9\u30eb\u30c0\u30c4\u30ea\u30fc\u306e\u4e00\u62ec\u540d\u524d\u5909\u66f4",
      href: "https://github.com/box-community/tool-python-batch-folder-tree-rename",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title:
        "Python\u306b\u3088\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u3078\u306e\u30d5\u30a9\u30eb\u30c0\u306e\u79fb\u52d5",
      href: "https://github.com/box-community/tool-python-move-folder-to-account",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "PHP\u306b\u3088\u308b\u7c21\u6613\u30e6\u30fc\u30b6\u30fc\u30ec\u30dd\u30fc\u30c8",
      href: "https://github.com/box-community/tool-php-simple-user-reports",
      icon: "/static/samples/php.svg",
      languages: ["PHP"],
      tags: ["API"],
    },
    {
      title: "Perl\u306b\u3088\u308b\u30d5\u30a9\u30eb\u30c0ID\u304b\u3089\u30d1\u30b9\u3078\u306e\u5909\u63db",
      href: "https://github.com/box-community/tool-perl-folderids-to-paths",
      icon: "/static/samples/perl.svg",
      languages: ["Perl"],
      tags: ["API"],
    },
    {
      title: "iOS Browse SDK",
      href: "https://github.com/box/box-ios-browse-sdk",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["API", "SDK"],
    },
    {
      title: "iOS Share SDK",
      href: "https://github.com/box/box-ios-share-sdk",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "Android Preview SDK",
      href: "https://github.com/box/box-android-preview-sdk",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "Android\u306e\u7c21\u6613\u30c4\u30fc\u30eb\u30c1\u30c3\u30d7",
      href: "https://github.com/box/android-simple-tooltip",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "Box Content Preview\u306e\u30c7\u30e2",
      href: "https://github.com/box/box-content-preview-demo",
      icon: "/static/samples/react.svg",
      languages: ["React", "JavaScript"],
      tags: ["\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Java SDK\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box/box-java-sdk-samples",
      icon: "/static/samples/java.svg",
      languages: ["Java"],
      tags: ["API"],
    },
    {
      title: ".NET\u30e1\u30bf\u30c7\u30fc\u30bfSDK V2",
      href: "https://github.com/box/box-windows-metadata-sdk-v2",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["SDK", "API"],
    },
    {
      title: "Android App to App SDK",
      href: "https://github.com/box/box-android-apptoapp-sdk",
      icon: "/static/samples/android.svg",
      languages: ["Android", "Java"],
      tags: ["SDK", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "Ruby SDK",
      href: "https://github.com/cburnette/boxr",
      icon: "/static/samples/ruby.svg",
      languages: ["Ruby"],
      tags: ["SDK"],
    },
    {
      title: "R SDK",
      href: "https://github.com/r-box/boxr",
      icon: "/static/samples/r.svg",
      languages: ["R"],
      tags: ["SDK"],
    },
    {
      title: "Box Jira Etsi Document Control",
      href: "https://github.com/goodgrid/etsi-document-control",
      icon: "/static/samples/javascript.svg",
      languages: ["JavaScript"],
      tags: ["API", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Box PowerShell\u306e\u81ea\u52d5\u5316",
      href: "https://github.com/kylefernandadams/box-powershell-automations",
      icon: "/static/samples/powershell.svg",
      languages: ["PowerShell"],
      tags: ["API", "\u30d7\u30ed\u30d3\u30b8\u30e7\u30cb\u30f3\u30b0"],
    },
    {
      title: "Microsoft Azure Media Services Box Skill",
      href: "https://github.com/box-community/sample-video-skills/tree/master/microsoft-azure-faces-transcript-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Postman\u30b3\u30ec\u30af\u30b7\u30e7\u30f3",
      href: "https://developer.box.com/guides/tooling/postman/",
      icon: "/static/samples/universal.svg",
      languages: ["Universal"],
      tags: ["API"],
    },
    {
      title: "\u30ed\u30b0\u3092\u4fdd\u5b58\u3059\u308bAWS Lambda\u95a2\u6570",
      href: "https://github.com/kenji-toforone/box-auditlogs-node-es",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Python\u306b\u3088\u308b\u975e\u540c\u671f\u30ec\u30fc\u30c8\u30ea\u30df\u30c3\u30bf\u30fc",
      href: "https://github.com/jmfrank63/box-python-async-rate-limiter",
      icon: "/static/samples/python.svg",
      languages: ["Python"],
      tags: ["API"],
    },
    {
      title: "Box for Salesforce\u30d6\u30eb\u30fc\u30d7\u30ea\u30f3\u30c8",
      href: "https://github.com/kylefernandadams/box-for-salesforce-blueprints",
      icon: "/static/samples/apex.svg",
      languages: ["APEX"],
      tags: ["SALESFORCE"],
    },
    {
      title: "Leverton\u306b\u3088\u308b\u8cc3\u8cb8\u5951\u7d04\u66f8\u304b\u3089\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-document-skills/tree/master/leverton-lease-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Rossum\u306b\u3088\u308b\u8acb\u6c42\u66f8\u60c5\u5831\u53ce\u96c6",
      href: "https://github.com/box-community/sample-document-skills/tree/master/rossum-invoice-intelligence",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title:
        "IBM Watson\u306b\u3088\u308b\u97f3\u58f0\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-audio-skills/tree/master/ibm-watson-transcript-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title:
        "Microsoft Azure\u306b\u3088\u308b\u97f3\u58f0\u30c8\u30e9\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-audio-skills/tree/master/microsoft-azure-transcript-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title:
        "VoiceBase\u306b\u3088\u308b\u30c7\u30e5\u30a2\u30eb\u30c1\u30e3\u30f3\u30cd\u30eb\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u5206\u6790",
      href: "https://github.com/box-community/sample-audio-skills/tree/master/voicebase-callcenter-audio-analysis",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Acuant AssureID Box Skill",
      href: "https://github.com/box-community/sample-image-skills/tree/master/acuant-assureid-goverment-id-data-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Amazon Rekognition\u306b\u3088\u308b\u30e9\u30d9\u30eb\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-image-skills/tree/master/amazon-rekognition-labels-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "EXIF/XMP\u30e1\u30bf\u60c5\u5831\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-image-skills/tree/master/exiftool-metainfo-extraction",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Google Cloud Vision Product Search",
      href: "https://github.com/box-community/sample-image-skills/tree/master/google-product-search-integration",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Google Vision\u306b\u3088\u308b\u753b\u50cf\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-image-skills/tree/master/google-vision-text-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Hive Predict\u306b\u3088\u308b\u9854\u8a8d\u8b58",
      href: "https://github.com/box-community/sample-image-skills/tree/master/hive-predict-face-recognition",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Microsoft Vision\u306b\u3088\u308b\u753b\u50cf\u306e\u62bd\u51fa",
      href: "https://github.com/box-community/sample-image-skills/tree/master/microsoft-vision-text-topics-detection",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "ASP.NET MVC 5\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-aspnet-mvc-sk",
      icon: "/static/samples/dotnet.svg",
      languages: [".NET"],
      tags: ["API"],
    },
    {
      title: "Auth0 Angular 1\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-auth0-angular1-skeleton-app-sample",
      icon: "/static/samples/angularjs.svg",
      languages: ["AngularJS", "JavaScript"],
      tags: ["API", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Auth0 Angular 2\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-auth0-angular2-skeleton-app-sample",
      icon: "/static/samples/angular.svg",
      languages: ["Angular", "JavaScript"],
      tags: ["API", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Auth0 Swift\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-auth0-swift-skeleton-app-sample",
      icon: "/static/samples/swift.svg",
      languages: ["Swift"],
      tags: ["API", "\u30e2\u30d0\u30a4\u30eb"],
    },
    {
      title: "AWS Cognito Angular 2\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-aws-cognito-angular2-skeleton-app-sample",
      icon: "/static/samples/angular.svg",
      languages: ["Angular", "JavaScript"],
      tags: ["API", "\u30d5\u30ed\u30f3\u30c8\u30a8\u30f3\u30c9"],
    },
    {
      title: "Java Servlet\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-java-servlet-skeleton-app",
      icon: "/static/samples/java.svg",
      languages: ["Java"],
      tags: ["API"],
    },
    {
      title: "Node Cognito Lambda\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box/samples/tree/master/box-node-cognito-lambdas-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node\u30ab\u30b9\u30bf\u30e0\u30b9\u30ad\u30eb\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box/samples/tree/master/box-node-custom-skills-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["SKILLS"],
    },
    {
      title: "Node Express\u30b9\u30b1\u30eb\u30c8\u30f3\u30a2\u30d7\u30ea",
      href: "https://github.com/box/samples/tree/master/box-node-express-skeleton-app",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Lambda\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box/samples/tree/master/box-node-lambda-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Rekognition Lambda\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box/samples/tree/master/box-node-rekognition-lambdas-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API"],
    },
    {
      title: "Node Webhook\u3068Lambda\u306e\u95a2\u9023\u4ed8\u3051\u306e\u30b5\u30f3\u30d7\u30eb",
      href: "https://github.com/box/samples/tree/master/box-node-webhook-to-lambda-sample",
      icon: "/static/samples/nodejs.svg",
      languages: ["Node"],
      tags: ["API", "WEBHOOK"],
    },
  ];

  // Extract unique languages and tags
  const allLanguages = useMemo(() => {
    const languageSet = new Set();
    sampleData.forEach((sample) => {
      sample.languages.forEach((lang) => languageSet.add(lang));
    });
    return ["すべての言語", ...Array.from(languageSet).sort()];
  }, []);

  const allTags = useMemo(() => {
    const tagSet = new Set();
    sampleData.forEach((sample) => {
      sample.tags.forEach((tag) => tagSet.add(tag));
    });
    return ["すべてのタグ", ...Array.from(tagSet).sort()];
  }, []);

  // Filter samples based on selected filters
  const filteredSamples = useMemo(() => {
    return sampleData.filter((sample) => {
      const languageMatch = selectedLanguage === "すべての言語" || sample.languages.includes(selectedLanguage);
      const tagMatch = selectedTag === "すべてのタグ" || sample.tags.includes(selectedTag);
      return languageMatch && tagMatch;
    });
  }, [selectedLanguage, selectedTag]);

  const resetFilters = () => {
    setSelectedLanguage("すべての言語");
    setSelectedTag("すべてのタグ");
  };

  const hasActiveFilters = selectedLanguage !== "すべての言語" || selectedTag !== "すべてのタグ";

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setLanguageDropdownOpen(!languageDropdownOpen);
              setTagDropdownOpen(false);
            }}
            className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors min-w-[180px]"
          >
            <span className="text-sm text-gray-700 dark:text-gray-200">{selectedLanguage}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
              className={`transition-transform ${languageDropdownOpen ? "rotate-180" : ""}`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m6.644 5.76808 4.34-3.766.75-.651996c.08352-.067492.15088-.152810.19716-.249704.04628-.096896.07030-.202916.07030-.310296 0-.107379-.02402-.213399-.07030-.310295C11.88488.382894 11.81752.297576 11.734.230084c-.18088-.151486-.41008-.233093-.646-.22999963H.912C.408.00008474 0 .354084 0 .790084c0 .21.096.412.266.56l.77.667996 4.32 3.75c.18130.14956.40898.23136.644.23136s.46270-.0818.644-.23136Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {languageDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
              {allLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setLanguageDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    selectedLanguage === lang
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Tag Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setTagDropdownOpen(!tagDropdownOpen);
              setLanguageDropdownOpen(false);
            }}
            className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors min-w-[180px]"
          >
            <span className="text-sm text-gray-700 dark:text-gray-200">{selectedTag}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              fill="none"
              className={`transition-transform ${tagDropdownOpen ? "rotate-180" : ""}`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m6.644 5.76808 4.34-3.766.75-.651996c.08352-.067492.15088-.152810.19716-.249704.04628-.096896.07030-.202916.07030-.310296 0-.107379-.02402-.213399-.07030-.310295C11.88488.382894 11.81752.297576 11.734.230084c-.18088-.151486-.41008-.233093-.646-.22999963H.912C.408.00008474 0 .354084 0 .790084c0 .21.096.412.266.56l.77.667996 4.32 3.75c.18130.14956.40898.23136.644.23136s.46270-.0818.644-.23136Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {tagDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    setSelectedTag(tag);
                    setTagDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    selectedTag === tag
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="px-4 py-2.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
          >
            フィルタをリセット
          </button>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSamples.map((sample, index) => (
          <a
            key={index}
            href={sample.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-col p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <img src={sample.icon} alt={sample.languages.join(", ")} className="w-12 h-12 my-0" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{sample.title}</h3>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {sample.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* No results message */}
      {filteredSamples.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">No samples found matching your filters.</p>
          <button
            onClick={resetFilters}
            className="mt-4 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};
