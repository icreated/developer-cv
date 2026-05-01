// Google Analytics — injected after page load to keep gtag.js off the critical path
window.addEventListener('load', function () {
    const s = document.createElement('script');
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-M5FFVQXXYY';
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-M5FFVQXXYY', {
        cookie_flags: 'SameSite=None;Secure'
    });
});
//# sourceMappingURL=google-analytics-init.js.map
