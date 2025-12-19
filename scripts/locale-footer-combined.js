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

  let originalCookieLink = null;
  let footerCookieLink = null;

  function moveCookieToFooter() {
    const footer = document.querySelector("#footer, footer");
    if (!footer) {
      return false;
    }

    const linksContainer = footer.querySelector(
      "div.flex.gap-4.flex-col.md\\:flex-row.md\\:items-center.md\\:gap-8.md\\:justify-center"
    );

    if (!linksContainer) {
      return false;
    }

    const existingCookieLink = linksContainer.querySelector('a[data-cookie-preferences="true"]');
    if (existingCookieLink) {
      footerCookieLink = existingCookieLink;
      return true;
    }

    const teconsent = document.getElementById("teconsent");
    if (teconsent && !originalCookieLink) {
      originalCookieLink =
        teconsent.querySelector('a[id^="icon-"]') ||
        teconsent.querySelector('a[href*="cookie"]') ||
        teconsent.querySelector('a[href*="preferences"]') ||
        teconsent.querySelector('a') ||
        teconsent.querySelector('button') ||
        teconsent.querySelector('[role="button"]') ||
        teconsent.querySelector('[onclick]') ||
        teconsent.querySelector('div[id^="icon-"]') ||
        teconsent.querySelector('div[class*="icon"]') ||
        teconsent.querySelector('div[tabindex]') ||
        (teconsent.children.length > 0 ? teconsent.children[0] : null) ||
        teconsent;

      if (originalCookieLink) {
        teconsent.style.cssText = "display: none !important; visibility: hidden !important; opacity: 0 !important; position: absolute !important; left: -9999px !important;";
        teconsent.setAttribute('aria-hidden', 'true');
      }
    }

    if (!originalCookieLink) {
      return false;
    }

    const cookieLink = document.createElement("a");
    cookieLink.href = "#";
    cookieLink.className =
      "text-sm max-w-36 whitespace-normal md:truncate text-gray-950/50 dark:text-white/50 hover:text-gray-950/70 dark:hover:text-white/70";
    cookieLink.setAttribute("data-cookie-preferences", "true");

    const isJapanese = isJapanesePage();
    cookieLink.textContent = isJapanese ? "Cookie設定" : "Cookie Preferences";

    cookieLink.addEventListener("click", (e) => {
      e.preventDefault();

      if (typeof window.truste !== 'undefined' && window.truste.eu) {
        window.truste.eu.clickListener();
        return;
      }

      if (originalCookieLink) {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
          composed: true
        });
        originalCookieLink.dispatchEvent(clickEvent);
        originalCookieLink.click();
      }

      const teconsent = document.getElementById("teconsent");
      if (teconsent) {
        const oldStyle = teconsent.style.cssText;
        teconsent.style.cssText = "position: absolute !important; left: -9999px !important;";
        teconsent.click();

        if (teconsent.children.length > 0) {
          teconsent.children[0].click();
        }

        setTimeout(() => {
          teconsent.style.cssText = oldStyle;
        }, 100);
      }
    });

    linksContainer.appendChild(cookieLink);
    footerCookieLink = cookieLink;

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

  function processFooter() {
    const footer = document.querySelector("#footer, footer");
    if (!footer) {
      return false;
    }

    const cookieMoved = moveCookieToFooter();
    localizeFooterLinks();

    if (cookieMoved && originalCookieLink && footerCookieLink) {
      maybeDisconnectObserver();
    }

    return true;
  }

  let processTimeout = null;
  function debouncedProcessFooter() {
    if (processTimeout) {
      clearTimeout(processTimeout);
    }
    processTimeout = setTimeout(() => {
      processFooter();
      processTimeout = null;
    }, 100);
  }

  let mutationObserver = null;
  function setupMutationObserver() {
    if (mutationObserver) {
      return;
    }

    mutationObserver = new MutationObserver((mutations) => {
      let shouldProcess = false;

      mutations.forEach((mutation) => {
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
      });

      if (shouldProcess) {
        debouncedProcessFooter();
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: false,
    });
  }

  function maybeDisconnectObserver() {
    if (originalCookieLink && footerCookieLink && mutationObserver) {
      mutationObserver.disconnect();
      mutationObserver = null;
    }
  }

  function initializeFooterProcessing() {
    if (processFooter()) {
      setupMutationObserver();
      return true;
    }
    return false;
  }

  function setupNavigationListeners() {
    window.addEventListener("popstate", () => {
      if (!mutationObserver) {
        setupMutationObserver();
      }
      debouncedProcessFooter();
    });

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function () {
      originalPushState.apply(this, arguments);
      if (!mutationObserver) {
        setupMutationObserver();
      }
      debouncedProcessFooter();
    };

    history.replaceState = function () {
      originalReplaceState.apply(this, arguments);
      if (!mutationObserver) {
        setupMutationObserver();
      }
      debouncedProcessFooter();
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      if (!initializeFooterProcessing()) {
        const retryInterval = setInterval(() => {
          if (initializeFooterProcessing()) {
            clearInterval(retryInterval);
          }
        }, 100);
        setTimeout(() => clearInterval(retryInterval), 10000);
      }
      setupNavigationListeners();
    });
  } else {
    if (!initializeFooterProcessing()) {
      const retryInterval = setInterval(() => {
        if (initializeFooterProcessing()) {
          clearInterval(retryInterval);
        }
      }, 100);
      setTimeout(() => clearInterval(retryInterval), 10000);
    }
    setupNavigationListeners();
  }

  const langObserver = new MutationObserver(() => {
    debouncedProcessFooter();
  });

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

  setTimeout(() => clearInterval(checkForLangSelector), 10000);
})();
