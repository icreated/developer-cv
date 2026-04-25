"use strict";


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    /* Github Calendar - https://github.com/IonicaBizau/github-calendar
       global_stats: false — the bundled parser expects GitHub's old
       SVG format and returns zeroes against the current <table> HTML.
       proxy with credentials:omit — prevents api.bloggify.net from
       storing third-party cookies (FB_SESSION) in the browser. */
    if (document.getElementById("github-graph")) {
        GitHubCalendar("#github-graph", "icreated", {
            responsive: true,
            global_stats: false,
            proxy(username) {
                return fetch(
                    `https://api.bloggify.net/gh-calendar/?username=${username}`,
                    { credentials: "omit" }
                ).then(r => r.text());
            }
        });
    }

function goBack() {
	if (document.referrer == "") {
		window.location.href = "/"
	} else {
		history.back()
	}
}
//# sourceMappingURL=main.js.map