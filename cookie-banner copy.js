/**
 * Cookie Policy Banner
 * Injects a cookie policy banner to the bottom of the page
 * Handles user consent preferences with localStorage
 */

(function () {
  // Configuration
  const STORAGE_KEY = "cookieConsent";
  const BANNER_ID = "cookie-policy-banner";

  // Check if consent has already been given
  function hasConsentBeenGiven() {
    return localStorage.getItem(STORAGE_KEY) !== null;
  }

  // Set consent preference
  function setConsent(accepted) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        accepted,
        timestamp: new Date().toISOString(),
      })
    );
  }

  // Create and inject the banner
  function injectBanner() {
    if (hasConsentBeenGiven()) {
      return; // Don't show if consent already given
    }

    // Create banner container
    const banner = document.createElement("div");
    banner.id = BANNER_ID;
    banner.className = "cookie-policy-banner";

    banner.innerHTML = `
      <div class="cookie-policy-content">
        <div class="cookie-policy-left">
          <h3 class="cookie-policy-title">Cookie Policy</h3>
          <p class="cookie-policy-description">
            We use cookies to enhance and personalize your experience. If you accept you agree to our full cookie policy
            <a href="https://community.box.com/site/terms" class="cookie-policy-link">Learn more about our cookies</a>
          </p>
        </div>
        <div class="cookie-policy-right">
          <div class="cookie-policy-buttons">
            <button class="cookie-policy-btn cookie-policy-btn-secondary">Deny all</button>
            <button class="cookie-policy-btn cookie-policy-btn-primary">Accept cookies</button>
          </div>
          <a href="#" class="cookie-policy-settings-link">Cookie settings</a>
        </div>
      </div>
    `;

    // Inject styles
    injectStyles();

    // Append to body
    document.body.appendChild(banner);

    // Attach event listeners
    const acceptBtn = banner.querySelector(".cookie-policy-btn-primary");
    const denyBtn = banner.querySelector(".cookie-policy-btn-secondary");
    const settingsLink = banner.querySelector(".cookie-policy-settings-link");

    acceptBtn.addEventListener("click", () => {
      setConsent(true);
      banner.remove();
    });

    denyBtn.addEventListener("click", () => {
      setConsent(false);
      banner.remove();
    });

    settingsLink.addEventListener("click", (e) => {
      e.preventDefault();
      openCookieSettingsModal();
    });
  }

  // Create and open cookie settings modal
  function openCookieSettingsModal() {
    // Create modal overlay
    const overlay = document.createElement("div");
    overlay.className = "cookie-settings-overlay";

    // Create modal content
    const modal = document.createElement("div");
    modal.className = "cookie-settings-modal";

    modal.innerHTML = `
      <button class="cookie-settings-close-btn">✕</button>
      <h2 class="cookie-settings-title">Cookie settings</h2>
      <p class="cookie-settings-description">
        We use 3 different kinds of cookies. You can choose which cookies you want to
        accept. We need basic cookies to make this site work, therefore these are the
        minimum you can select. <a href="#" class="cookie-settings-link">Learn more about our cookies</a>
      </p>
      <div class="cookie-settings-options">
        <label class="cookie-settings-option">
          <input type="radio" name="cookie-type" value="basic" checked>
          <div class="cookie-settings-option-content">
            <strong>Basic</strong>
            <span>Functional</span>
          </div>
        </label>
        <label class="cookie-settings-option">
          <input type="radio" name="cookie-type" value="normal">
          <div class="cookie-settings-option-content">
            <strong>Normal</strong>
            <span>Functional + analytics</span>
          </div>
        </label>
        <label class="cookie-settings-option">
          <input type="radio" name="cookie-type" value="complete">
          <div class="cookie-settings-option-content">
            <strong>Complete</strong>
            <span>Functional + analytics + social media + embedded videos + marketing</span>
          </div>
        </label>
      </div>
      <button class="cookie-settings-accept-btn">Accept cookies</button>
    `;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    // Event listeners
    const closeBtn = modal.querySelector(".cookie-settings-close-btn");
    const acceptBtn = modal.querySelector(".cookie-settings-accept-btn");

    closeBtn.addEventListener("click", () => {
      overlay.remove();
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    acceptBtn.addEventListener("click", () => {
      const selectedOption = modal.querySelector('input[name="cookie-type"]:checked').value;
      setConsent(selectedOption);
      overlay.remove();
      document.getElementById(BANNER_ID)?.remove();
    });
  }

  // Inject CSS styles
  function injectStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .cookie-policy-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(40, 40, 40, 0.95);
        color: #ffffff;
        padding: 24px;
        z-index: 9999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        backdrop-filter: blur(10px);
      }

      .dark .cookie-policy-banner {
        background: rgba(20, 20, 20, 0.98);
      }

      .cookie-policy-content {
        max-width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        justify-content: center;
        text-align: center;
      }

      .cookie-policy-left {
        flex: 1;
        width: 100%;
      }

      .cookie-policy-title {
        margin: 0 0 6px 0;
        font-size: 14px;
        font-weight: 600;
      }

      .cookie-policy-description {
        margin: 0;
        font-size: 13px;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.85);
      }

      .cookie-policy-link {
        text-decoration: underline;
        cursor: pointer;
        }
        
        .cookie-policy-link:hover {
        color: #0061D5;
        text-decoration: underline;
      }

      .cookie-policy-right {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        flex-shrink: 0;
      }

      .cookie-policy-buttons {
        display: flex;
        gap: 12px;
      }

      .cookie-policy-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }

      .cookie-policy-btn-primary {
        background: #0061d5;
        color: #ffffff;
      }

      .cookie-policy-btn-primary:hover {
        background: #0052a3;
      }

      .cookie-policy-btn-secondary {
        background: rgba(255, 255, 255, 0.1);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .cookie-policy-btn-secondary:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      .cookie-policy-settings-link {
        color: rgba(255, 255, 255, 0.75);
        font-size: 12px;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.2s ease;
        white-space: nowrap;
      }

      .cookie-policy-settings-link:hover {
        color: #0061D5;
        text-decoration: underline;
      }

      @media (max-width: 1024px) {
        .cookie-policy-banner {
          padding: 16px;
        }

        .cookie-policy-content {
          gap: 16px;
        }

        .cookie-policy-right {
          gap: 10px;
        }

        .cookie-policy-btn {
          padding: 7px 14px;
          font-size: 12px;
        }
      }

      @media (max-width: 768px) {
        .cookie-policy-content {
          flex-direction: column;
          align-items: flex-start;
        }

        .cookie-policy-right {
          width: 100%;
          flex-wrap: wrap;
        }

        .cookie-policy-btn {
          flex: 1;
          min-width: 100px;
        }
      }

      /* Cookie Settings Modal Styles */
      .cookie-settings-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
      }

      .cookie-settings-modal {
        background: #ffffff;
        border-radius: 8px;
        padding: 40px;
        max-width: 500px;
        width: 90%;
        position: relative;
        box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
        color: #1a1a1a;
      }

      .cookie-settings-close-btn {
        position: absolute;
        top: 24px;
        right: 24px;
        background: none;
        border: none;
        font-size: 24px;
        color: #666;
        cursor: pointer;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.2s ease;
      }

      .cookie-settings-close-btn:hover {
        color: #000;
      }

      .cookie-settings-title {
        margin: 0 0 20px 0;
        font-size: 24px;
        font-weight: 600;
        color: #1a1a1a;
      }

      .cookie-settings-description {
        margin: 0 0 30px 0;
        font-size: 14px;
        line-height: 1.6;
        color: #333;
      }

      .cookie-settings-link {
        color: #0061d5;
        text-decoration: none;
        cursor: pointer;
      }

      .cookie-settings-link:hover {
        text-decoration: underline;
      }

      .cookie-settings-options {
        margin: 0 0 30px 0;
      }

      .cookie-settings-option {
        display: flex;
        gap: 12px;
        padding: 16px;
        margin-bottom: 12px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s ease;
        align-items: flex-start;
      }

      .cookie-settings-option:hover {
        background: #f5f5f5;
      }

      .cookie-settings-option input[type="radio"] {
        margin-top: 4px;
        cursor: pointer;
        accent-color: #0061d5;
      }

      .cookie-settings-option-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
      }

      .cookie-settings-option-content strong {
        font-weight: 600;
        color: #1a1a1a;
        font-size: 14px;
      }

      .cookie-settings-option-content span {
        font-size: 13px;
        color: #666;
      }

      .cookie-settings-accept-btn {
        width: 100%;
        padding: 12px 24px;
        background: #0061d5;
        color: #ffffff;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.2s ease;
      }

      .cookie-settings-accept-btn:hover {
        background: #0052a3;
      }

      .dark .cookie-settings-modal {
        background: #0E0E10;
        color: #e0e0e0;
      }

      .dark .cookie-settings-close-btn {
        color: #999;
      }

      .dark .cookie-settings-close-btn:hover {
        color: #fff;
      }

      .dark .cookie-settings-title {
        color: #ffffff;
      }

      .dark .cookie-settings-description {
        color: #b0b0b0;
      }

      .dark .cookie-settings-option {
        border-color: #333;
        background: rgba(255, 255, 255, 0.02);
      }

      .dark .cookie-settings-option:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      .dark .cookie-settings-option-content strong {
        color: #ffffff;
      }

      .dark .cookie-settings-option-content span {
        color: #999;
      }
    `;
    document.head.appendChild(style);
  }

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", injectBanner);
  } else {
    injectBanner();
  }
})();
