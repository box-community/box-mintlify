/**
 * Move Cookie Preferences to Footer
 * Extracts the TrustArc cookie preferences link and adds it to the footer links
 */

(function () {
  function moveCookieToFooter() {
    const footer = document.querySelector("footer");
    const teconsent = document.getElementById("teconsent");

    // Check if both elements exist
    if (!footer || !teconsent) {
      return false;
    }

    // Find the footer links container
    const linksContainer = footer.querySelector(
      "div.flex.gap-4.flex-col.md\\:flex-row.md\\:items-center.md\\:gap-8.md\\:justify-center"
    );

    if (!linksContainer) {
      return false;
    }

    // Get the cookie preferences link from teconsent
    const cookieLink = teconsent.querySelector('a[id^="icon-"]');

    if (!cookieLink) {
      return false;
    }

    // Apply the same styling as other footer links
    cookieLink.className =
      "text-sm max-w-36 whitespace-normal md:truncate text-gray-950/50 dark:text-white/50 hover:text-gray-950/70 dark:hover:text-white/70";

    // Remove unnecessary attributes
    cookieLink.removeAttribute("role");
    cookieLink.removeAttribute("tabindex");

    // Append the styled link to the footer links container
    linksContainer.appendChild(cookieLink);

    // Hide the original teconsent container
    teconsent.style.display = "none";

    return true;
  }

  // Try to move immediately
  if (moveCookieToFooter()) {
    return;
  }

  // If not successful, observe for when elements appear
  const observer = new MutationObserver(function () {
    if (moveCookieToFooter()) {
      observer.disconnect();
    }
  });

  // Start observing the document body for added nodes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // Fallback: stop observing after 10 seconds
  setTimeout(function () {
    observer.disconnect();
  }, 10000);
})();
