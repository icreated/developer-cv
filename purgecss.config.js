// Run after `bundle exec jekyll build` to strip unused CSS.
// Usage: npx purgecss --config purgecss.config.js
module.exports = {
    content: ['_site/**/*.html'],
    css: [
        'assets/plugins/bootstrap/css/bootstrap.min.css',
        'assets/fontawesome/css/all.min.css',
    ],
    output: undefined, // overwrite in-place
    safelist: {
        // Keep all FontAwesome utility classes (fa, fab, fas, far, fa-*)
        pattern: /^fa/,
    },
};
