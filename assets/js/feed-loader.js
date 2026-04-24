// Create a Trusted Types policy if the API is available
let feedPolicy = null;

if (typeof trustedTypes !== 'undefined') {
    try {
        feedPolicy = trustedTypes.createPolicy('feed-loader', {
            createHTML: (input) => {
                const parser = new DOMParser();
                const fragment = parser.parseFromString(`<div>${input}</div>`, 'text/html');
                // Remove any script tags and dangerous attributes
                const scripts = fragment.querySelectorAll('script, iframe, [on*="on"]');
                scripts.forEach(el => el.remove());
                return fragment.querySelector('div').innerHTML;
            }
        });
    } catch (e) {
        console.warn('Failed to create Trusted Types policy:', e);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    callFeed();
}, false);

function callFeed() {
    fetch("https://icreated.co/feed.xml")
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            const items = data.querySelectorAll("entry");
            let html = ``;
            items.forEach(el => {
                const href = el.querySelector("[href]").getAttribute("href");
                const title = el.querySelector("title").textContent;
                html += `
                <li class="item"><a href="${encodeURI(href)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt" aria-hidden="true"></i>&nbsp;${escapeHtml(title)}</a></li>
                `;
            });
            let content = html;
            // Use Trusted Types policy if available
            if (feedPolicy) {
                content = feedPolicy.createHTML(html);
            }
            document.querySelector("#rss-feeds").innerHTML = content;                
        })
        .catch(error => console.warn('Failed to load RSS feed:', error));
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
//# sourceMappingURL=feed-loader.js.map
