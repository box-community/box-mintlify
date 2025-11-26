/**
 * Locale Link Handler
 * Redirects links based on current page locale
 * - Blog links: blog.box.com ↔ medium.com/box-developer-japan-blog
 * - Home links: / ↔ /ja
 * - Community links: adds ?lang=ja on Japanese pages
 * - Box.com legal links: /en-gb/ ↔ /ja-jp/
 */

(function() {
  const ENGLISH_BLOG = 'https://blog.box.com';
  const JAPANESE_BLOG = 'https://medium.com/box-developer-japan-blog';
  const ENGLISH_HOME = '/';
  const JAPANESE_HOME = '/ja';
  const COMMUNITY_BASE = 'https://community.box.com';
  const BOX_COM_BASE = 'https://www.box.com';

  // Function to detect current page language (checks both URL and language selector)
  function isJapanesePage() {
    // First, check URL
    if (window.location.pathname.startsWith('/ja/')) {
      return true;
    }

    // If not in URL, check the language selector button
    const langButton = document.querySelector('#localization-select-trigger');
    if (langButton) {
      const langText = langButton.textContent.toLowerCase();
      return langText.includes('日本語') || langText.includes('japanese');
    }

    return false;
  }

  // Function to handle blog link click
  function handleBlogLinkClick(event) {
    const link = event.currentTarget;
    let targetUrl;

    const currentPageIsJapanese = isJapanesePage();

    // Check if link points to English blog (exact or with path)
    if (link.href.startsWith(ENGLISH_BLOG)) {
      if (currentPageIsJapanese) {
        // On Japanese pages: redirect English blog to Japanese blog
        targetUrl = JAPANESE_BLOG;
      }
    }
    // Check if link points to Japanese blog (exact or with path)
    else if (link.href.startsWith(JAPANESE_BLOG)) {
      if (!currentPageIsJapanese) {
        // On English pages: redirect Japanese blog to English blog
        targetUrl = ENGLISH_BLOG;
      }
    }

    if (targetUrl) {
      event.preventDefault();
      // Respect the target attribute
      const target = link.getAttribute('target') || '_self';
      window.open(targetUrl, target);
    }
  }

  // Function to handle home link click
  function handleHomeLinkClick(event) {
    const link = event.currentTarget;
    let targetUrl;

    const currentPageIsJapanese = isJapanesePage();

    // Get the pathname from the link
    const linkPath = new URL(link.href, window.location.origin).pathname;

    // Check if link points to English home (exact match)
    if (linkPath === ENGLISH_HOME) {
      if (currentPageIsJapanese) {
        // On Japanese pages: redirect to Japanese home
        targetUrl = JAPANESE_HOME;
      }
    }
    // Check if link points to Japanese home
    else if (linkPath === JAPANESE_HOME) {
      if (!currentPageIsJapanese) {
        // On English pages: redirect to English home
        targetUrl = ENGLISH_HOME;
      }
    }

    if (targetUrl) {
      event.preventDefault();
      window.location.href = targetUrl;
    }
  }

  // Add click listeners to all blog links
  function setupBlogLinks() {
    // Find all links that start with either blog URL
    const allLinks = document.querySelectorAll('a[href*="blog.box.com"], a[href*="medium.com/box-developer-japan-blog"]');
    const blogLinks = Array.from(allLinks).filter((link) =>
      link.href.startsWith(ENGLISH_BLOG) || link.href.startsWith(JAPANESE_BLOG)
    );
    blogLinks.forEach((link) => {
      link.addEventListener('click', handleBlogLinkClick);
    });
  }

  // Function to handle community link click
  function handleCommunityLinkClick(event) {
    const link = event.currentTarget;
    const currentPageIsJapanese = isJapanesePage();

    // Parse the current URL
    const url = new URL(link.href);

    if (currentPageIsJapanese) {
      // On Japanese pages: add lang=ja parameter if not present
      if (!url.searchParams.has('lang')) {
        url.searchParams.set('lang', 'ja');
        event.preventDefault();
        const target = link.getAttribute('target') || '_self';
        window.open(url.toString(), target);
      }
    } else {
      // On English pages: remove lang parameter if present
      if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        event.preventDefault();
        const target = link.getAttribute('target') || '_self';
        window.open(url.toString(), target);
      }
    }
  }

  // Add click listeners to all home links
  function setupHomeLinks() {
    // Find all links that point to home paths
    const homeLinks = document.querySelectorAll('a[href="/"], a[href="/ja"]');
    homeLinks.forEach((link) => {
      link.addEventListener('click', handleHomeLinkClick);
    });
  }

  // Function to handle box.com legal link click
  function handleBoxComLinkClick(event) {
    const link = event.currentTarget;
    const currentPageIsJapanese = isJapanesePage();

    // Parse the current URL
    const url = new URL(link.href);

    if (currentPageIsJapanese) {
      // On Japanese pages: replace /en-gb/ with /ja-jp/
      if (url.pathname.includes('/en-gb/')) {
        url.pathname = url.pathname.replace('/en-gb/', '/ja-jp/');
        event.preventDefault();
        const target = link.getAttribute('target') || '_self';
        window.open(url.toString(), target);
      }
    } else {
      // On English pages: replace /ja-jp/ with /en-gb/
      if (url.pathname.includes('/ja-jp/')) {
        url.pathname = url.pathname.replace('/ja-jp/', '/en-gb/');
        event.preventDefault();
        const target = link.getAttribute('target') || '_self';
        window.open(url.toString(), target);
      }
    }
  }

  // Add click listeners to all community links
  function setupCommunityLinks() {
    // Find all links that point to community.box.com
    const communityLinks = document.querySelectorAll('a[href*="community.box.com"]');
    Array.from(communityLinks).forEach((link) => {
      if (link.href.startsWith(COMMUNITY_BASE)) {
        link.addEventListener('click', handleCommunityLinkClick);
      }
    });
  }

  // Add click listeners to all box.com legal links
  function setupBoxComLinks() {
    // Find all links that point to www.box.com
    const boxComLinks = document.querySelectorAll('a[href*="www.box.com"]');
    Array.from(boxComLinks).forEach((link) => {
      if (link.href.startsWith(BOX_COM_BASE)) {
        link.addEventListener('click', handleBoxComLinkClick);
      }
    });
  }

  // Watch for dynamically added links
  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check if the node itself is a blog link
            if (node.tagName === 'A' &&
                (node.href.startsWith(ENGLISH_BLOG) || node.href.startsWith(JAPANESE_BLOG))) {
              node.addEventListener('click', handleBlogLinkClick);
            }
            // Check if the node itself is a home link
            if (node.tagName === 'A') {
              const href = node.getAttribute('href');
              if (href === '/' || href === '/ja') {
                node.addEventListener('click', handleHomeLinkClick);
              }
              // Check if the node itself is a community link
              if (node.href && node.href.startsWith(COMMUNITY_BASE)) {
                node.addEventListener('click', handleCommunityLinkClick);
              }
              // Check if the node itself is a box.com link
              if (node.href && node.href.startsWith(BOX_COM_BASE)) {
                node.addEventListener('click', handleBoxComLinkClick);
              }
            }
            // Check if the node contains any blog links
            const blogLinks = node.querySelectorAll?.(
              'a[href*="blog.box.com"], a[href*="medium.com/box-developer-japan-blog"]'
            );
            if (blogLinks) {
              blogLinks.forEach((link) => {
                if ((link.href.startsWith(ENGLISH_BLOG) || link.href.startsWith(JAPANESE_BLOG)) &&
                    !link._blogLinkListenerAdded) {
                  link.addEventListener('click', handleBlogLinkClick);
                  link._blogLinkListenerAdded = true;
                }
              });
            }
            // Check if the node contains any home links
            const homeLinks = node.querySelectorAll?.('a[href="/"], a[href="/ja"]');
            if (homeLinks) {
              homeLinks.forEach((link) => {
                if (!link._homeLinkListenerAdded) {
                  link.addEventListener('click', handleHomeLinkClick);
                  link._homeLinkListenerAdded = true;
                }
              });
            }
            // Check if the node contains any community links
            const communityLinks = node.querySelectorAll?.('a[href*="community.box.com"]');
            if (communityLinks) {
              communityLinks.forEach((link) => {
                if (link.href.startsWith(COMMUNITY_BASE) && !link._communityLinkListenerAdded) {
                  link.addEventListener('click', handleCommunityLinkClick);
                  link._communityLinkListenerAdded = true;
                }
              });
            }
            // Check if the node contains any box.com links
            const boxComLinks = node.querySelectorAll?.('a[href*="www.box.com"]');
            if (boxComLinks) {
              boxComLinks.forEach((link) => {
                if (link.href.startsWith(BOX_COM_BASE) && !link._boxComLinkListenerAdded) {
                  link.addEventListener('click', handleBoxComLinkClick);
                  link._boxComLinkListenerAdded = true;
                }
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupBlogLinks();
      setupHomeLinks();
      setupCommunityLinks();
      setupBoxComLinks();
      setupMutationObserver();
    });
  } else {
    setupBlogLinks();
    setupHomeLinks();
    setupCommunityLinks();
    setupBoxComLinks();
    setupMutationObserver();
  }
})();
