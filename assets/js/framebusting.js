// JavaScript framebusting — fallback clickjacking protection for static hosting
// (frame-ancestors CSP and X-Frame-Options require HTTP headers, unavailable on GitHub Pages)
if (window.top !== window.self) {
    window.top.location = window.self.location;
}
//# sourceMappingURL=framebusting.js.map
