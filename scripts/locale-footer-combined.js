/**
 * Combined Footer Handler
 * 1. Moves Cookie Preferences link to footer
 * 2. Localizes all footer links based on page locale
 */

(function () {
  // Footer link translations (English -> Japanese)
  const FOOTER_TRANSLATIONS = {
    "Newsletter unsubscribe": "ニュースレター配信停止",
    "Terms of Use": "利用規約",
    "Privacy Policy": "プライバシーポリシー",
    "Cookie Notification": "Cookie通知",
    Unlicense: "ライセンス解除",
    "Cookie Preferences": "Cookie設定",
  };

  // Reverse mapping (Japanese -> English)
  const REVERSE_TRANSLATIONS = Object.fromEntries(Object.entries(FOOTER_TRANSLATIONS).map(([en, ja]) => [ja, en]));

  // Function to detect current page language
  function isJapanesePage() {
    // First, check URL
    if (window.location.pathname.startsWith("/ja/")) {
      return true;
    }

    // If not in URL, check the language selector button
    const langButton = document.querySelector("#localization-select-trigger");
    if (langButton) {
      const langText = langButton.textContent.toLowerCase();
      return langText.includes("日本語") || langText.includes("japanese");
    }

    return false;
  }

  // Keep a reference to the cloned cookie link
  let cachedCookieLink = null;

  // Step 1: Move Cookie Preferences to Footer
  function moveCookieToFooter() {
    const footer = document.querySelector("#footer, footer");

    // Check if footer exists
    if (!footer) {
      return false;
    }

    // Find the footer links container
    const linksContainer = footer.querySelector(
      "div.flex.gap-4.flex-col.md\\:flex-row.md\\:items-center.md\\:gap-8.md\\:justify-center"
    );

    if (!linksContainer) {
      return false;
    }

    // Check if cookie preferences link already exists in footer (using data attribute)
    const existingCookieLink = linksContainer.querySelector('a[data-cookie-preferences="true"]');

    if (existingCookieLink) {
      return true;
    }

    // Try to get the cookie link from teconsent
    const teconsent = document.getElementById("teconsent");
    let cookieLink = null;

    if (teconsent) {
      const originalLink = teconsent.querySelector('a[id^="icon-"]');
      if (originalLink) {
        // Clone the link instead of moving it
        cookieLink = originalLink.cloneNode(true);
        cachedCookieLink = cookieLink;

        // Hide the original teconsent container
        teconsent.style.display = "none";
      }
    }

    // If teconsent not available, use cached link
    if (!cookieLink && cachedCookieLink) {
      cookieLink = cachedCookieLink.cloneNode(true);
    }

    if (!cookieLink) {
      return false;
    }

    // Apply the same styling as other footer links
    cookieLink.className =
      "text-sm max-w-36 whitespace-normal md:truncate text-gray-950/50 dark:text-white/50 hover:text-gray-950/70 dark:hover:text-white/70";

    // Remove unnecessary attributes
    cookieLink.removeAttribute("role");
    cookieLink.removeAttribute("tabindex");

    // Add a unique marker to identify this as the cookie preferences link
    cookieLink.setAttribute("data-cookie-preferences", "true");

    // Set the appropriate text based on page language
    const isJapanese = isJapanesePage();
    cookieLink.textContent = isJapanese ? "Cookie設定" : "Cookie Preferences";

    // Append the cloned link to the footer links container
    linksContainer.appendChild(cookieLink);

    return true;
  }

  // Step 2: Localize footer links
  function localizeFooterLinks() {
    const isJapanese = isJapanesePage();

    // Find all links in the footer element
    const footer = document.querySelector("#footer, footer");
    if (!footer) return;

    const footerLinks = footer.querySelectorAll("a[href]");

    footerLinks.forEach((link) => {
      const currentText = link.textContent.trim();

      if (isJapanese) {
        // Translate English to Japanese
        if (FOOTER_TRANSLATIONS[currentText]) {
          link.textContent = FOOTER_TRANSLATIONS[currentText];
          link.setAttribute("data-original-text", currentText);
        }
      } else {
        // Translate Japanese back to English
        if (REVERSE_TRANSLATIONS[currentText]) {
          link.textContent = REVERSE_TRANSLATIONS[currentText];
          link.setAttribute("data-original-text", currentText);
        }
        // Also check if we have the original text stored
        else if (link.hasAttribute("data-original-text")) {
          const originalText = link.getAttribute("data-original-text");
          if (FOOTER_TRANSLATIONS[originalText]) {
            link.textContent = originalText;
          }
        }
      }
    });
  }

  // Combined process: Move cookie link first, then localize
  function processFooter() {
    const footer = document.querySelector("#footer, footer");
    if (!footer) {
      return false;
    }

    // Step 1: Move cookie link if it exists
    moveCookieToFooter();

    // Step 2: Localize all footer links (including the newly added cookie link)
    localizeFooterLinks();

    return true;
  }

  // Watch for dynamically added content and footer changes
  function setupMutationObserver() {
    const observer = new MutationObserver((mutations) => {
      let shouldProcess = false;

      mutations.forEach((mutation) => {
        // Check if footer or teconsent elements were added/modified
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (
              node.id === "footer" ||
              node.id === "teconsent" ||
              node.tagName === "FOOTER" ||
              node.querySelector?.("#footer, footer, #teconsent")
            ) {
              shouldProcess = true;
            }
          }
        });

        // Check if changes happened within footer
        if (mutation.target.id === "footer" || mutation.target.closest?.("#footer, footer")) {
          shouldProcess = true;
        }
      });

      if (shouldProcess) {
        // Small delay to ensure DOM is fully updated
        setTimeout(() => processFooter(), 50);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  // Continuously check for cookie preferences link and re-add if needed
  function setupContinuousCheck() {
    setInterval(() => {
      const footer = document.querySelector("#footer, footer");
      if (!footer) return;

      // Look for "Cookie Preferences" specifically (not "Cookie Notification")
      const isJapanese = isJapanesePage();
      const expectedText = isJapanese ? "Cookie設定" : "Cookie Preferences";

      let cookiePrefsFound = false;
      const footerLinks = footer.querySelectorAll("a[href]");

      footerLinks.forEach((link) => {
        const linkText = link.textContent.trim();
        if (linkText === expectedText || linkText === "Cookie Preferences" || linkText === "Cookie設定") {
          cookiePrefsFound = true;
        }
      });

      // If Cookie Preferences link is missing, try to move and localize
      if (!cookiePrefsFound) {
        const moved = moveCookieToFooter();
        if (moved) {
          localizeFooterLinks();
        }
      }
    }, 200); // Check every 200ms for faster response
  }

  // Initialize with retry logic
  function initializeFooterProcessing() {
    if (processFooter()) {
      setupMutationObserver();
      setupContinuousCheck();
      return true;
    }
    return false;
  }

  // Listen for navigation events (for SPA-style navigation)
  function setupNavigationListeners() {
    // Listen for popstate (browser back/forward)
    window.addEventListener("popstate", () => {
      setTimeout(() => processFooter(), 100);
    });

    // Listen for pushstate/replacestate (client-side navigation)
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function () {
      originalPushState.apply(this, arguments);
      setTimeout(() => processFooter(), 100);
    };

    history.replaceState = function () {
      originalReplaceState.apply(this, arguments);
      setTimeout(() => processFooter(), 100);
    };
  }

  // Try to initialize immediately
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (!initializeFooterProcessing()) {
        // Footer not found, retry with interval
        const retryInterval = setInterval(() => {
          if (initializeFooterProcessing()) {
            clearInterval(retryInterval);
          }
        }, 100);
        // Stop retrying after 10 seconds
        setTimeout(() => clearInterval(retryInterval), 10000);
      }
      setupNavigationListeners();
    });
  } else {
    if (!initializeFooterProcessing()) {
      // Footer not found, retry with interval
      const retryInterval = setInterval(() => {
        if (initializeFooterProcessing()) {
          clearInterval(retryInterval);
        }
      }, 100);
      // Stop retrying after 10 seconds
      setTimeout(() => clearInterval(retryInterval), 10000);
    }
    setupNavigationListeners();
  }

  // Re-process on language change
  const langObserver = new MutationObserver(() => {
    processFooter();
  });

  // Watch for changes to the language selector
  const checkForLangSelector = setInterval(() => {
    const langButton = document.querySelector("#localization-select-trigger");
    if (langButton) {
      langObserver.observe(langButton, {
        childList: true,
        characterData: true,
        subtree: true,
      });
      clearInterval(checkForLangSelector);
    }
  }, 500);

  // Clear the interval after 10 seconds
  setTimeout(() => clearInterval(checkForLangSelector), 10000);
})();
