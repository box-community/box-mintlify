/**
 * Locale Link Handler
 * Redirects blog links based on current page locale
 * - On /ja/ pages: blog.box.com → medium.com/box-developer-japan-blog
 * - On non-/ja/ pages: medium.com/box-developer-japan-blog → blog.box.com
 */

(function() {
  const ENGLISH_BLOG = 'https://blog.box.com';
  const JAPANESE_BLOG = 'https://medium.com/box-developer-japan-blog';

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

  // Watch for dynamically added blog links
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
      setupMutationObserver();
    });
  } else {
    setupBlogLinks();
    setupMutationObserver();
  }
})();
