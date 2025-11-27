/**
 * TrustArc Cookie Consent Banner
 * Loads the TrustArc consent notice from the configured source URL
 */

(function () {
  // Load TrustArc consent banner
  function loadTrustArcBanner() {
    // Create container divs that TrustArc expects
    const bannerDiv = document.createElement("div");
    bannerDiv.id = "consent_blackbar";
    document.body.appendChild(bannerDiv);

    const prefsDiv = document.createElement("div");
    prefsDiv.id = "teconsent";
    document.body.appendChild(prefsDiv);

    // Create and load TrustArc script
    const trustarcScript = document.createElement("script");
    trustarcScript.type = "text/javascript";
    trustarcScript.async = true;

    // Set the script source to the TrustArc notice URL with parameters
    trustarcScript.src =
      "https://consent.trustarc.com/notice?domain=box.com&c=teconsent&gtm=true&js=nj&noticeType=bb&text=true";

    // Append to document head
    document.head.appendChild(trustarcScript);
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadTrustArcBanner);
  } else {
    loadTrustArcBanner();
  }
})();
