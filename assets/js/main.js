"use strict";


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    /* Github Calendar - https://github.com/IonicaBizau/github-calendar
       global_stats: false — the bundled parser expects GitHub's old
       SVG format and returns zeroes against the current <table> HTML,
       producing "0 total / Rock - Hard Place" fallback text. */
    GitHubCalendar("#github-graph", "icreated", { responsive: true, global_stats: false });

function goBack() {
	if (document.referrer == "") {
		window.location.href = "/"
	} else {
		history.back()
	}
}