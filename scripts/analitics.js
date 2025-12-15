
// Adobe Launch script loader
(function loadAdobeLaunch() {
  try {
    const script = document.createElement('script');
    script.src = 'https://assets.adobedtm.com/6055abd7bbba/bca87b1c434b/launch-f7337d628848.min.js';
    script.async = true;
    document.head.appendChild(script);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to load Adobe Launch script', error);
  }
})();