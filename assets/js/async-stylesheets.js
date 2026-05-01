// Switch deferred stylesheets from media="print" to media="all".
// This script is deferred, so DOM is already parsed when it runs — no need for DOMContentLoaded.
document.querySelectorAll('link[media="print"][data-async]')
    .forEach(sheet => { sheet.media = 'all'; });
//# sourceMappingURL=async-stylesheets.js.map
