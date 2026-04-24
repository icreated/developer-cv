// Load async stylesheets with media-print optimization
document.addEventListener('DOMContentLoaded', function() {
    const asyncSheets = document.querySelectorAll('link[media="print"][data-async]');
    asyncSheets.forEach(sheet => {
        sheet.media = 'all';
    });
});
//# sourceMappingURL=async-stylesheets.js.map
