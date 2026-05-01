"use strict";


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    /* Github Calendar - https://github.com/IonicaBizau/github-calendar
       global_stats: false — the bundled parser expects GitHub's old
       SVG format and returns zeroes against the current <table> HTML.
       proxy with credentials:omit — prevents api.bloggify.net from
       storing third-party cookies (FB_SESSION) in the browser. */
    if (document.getElementById("github-graph")) {
        // Discard any prior bad cache (e.g. "[object Response]" from earlier proxy bug).
        const cached = localStorage.getItem("gh_calendar_content.icreated");
        if (!cached || !cached.includes("<")) {
            localStorage.removeItem("gh_calendar_content.icreated");
            localStorage.removeItem("gh_calendar_expire.icreated");
        }
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

function initSkillsHumorAnimation() {
    const skillset = document.getElementById("skillset");
    if (!skillset) {
        return;
    }

    const bars = skillset.querySelectorAll(".level-bar-inner");
    if (!bars.length) {
        return;
    }

    // Store initial percentages
    const initialValues = {};
    let iaBar = null;
    bars.forEach((bar) => {
        const skillName = (bar.dataset.skill || "").trim();
        const basePercentage = parseInt(bar.dataset.basePercentage || "0", 10);
        initialValues[skillName] = basePercentage;
        if (skillName.toUpperCase() === "IA") {
            iaBar = bar;
        }
    });

    function startAnimation() {
        let aiLevel = 0;
        const maxLevel = 100;

        function animateSkillsForward() {
            bars.forEach((bar) => {
                const skillName = (bar.dataset.skill || "").trim();
                const label = bar.parentElement?.parentElement?.querySelector(".skill-level");
                const basePercentage = initialValues[skillName] || 0;

                if (skillName.toUpperCase() === "IA") {
                    bar.style.width = `${aiLevel}%`;
                    bar.setAttribute("aria-valuenow", String(aiLevel));
                    if (label) {
                        label.textContent = `${aiLevel}%`;
                    }
                    return;
                }

                // Proportional decrease: from basePercentage to 50% of basePercentage
                const reduction = aiLevel / maxLevel;
                const newWidth = basePercentage * (1 - 0.5 * reduction);

                bar.style.width = `${newWidth}%`;
                bar.setAttribute("aria-valuenow", String(Math.round(newWidth)));
                if (label) {
                    label.textContent = `${Math.round(newWidth)}%`;
                }
            });

            aiLevel = Math.min(maxLevel, aiLevel + 2);
            if (aiLevel < maxLevel) {
                window.setTimeout(animateSkillsForward, 100);
            } else {
                // Hold for 3 seconds then animate back
                window.setTimeout(animateSkillsBackward, 3000);
            }
        }

        function animateSkillsBackward() {
            let returnLevel = maxLevel;

            function animateReturn() {
                bars.forEach((bar) => {
                    const skillName = (bar.dataset.skill || "").trim();
                    const label = bar.parentElement?.parentElement?.querySelector(".skill-level");
                    const basePercentage = initialValues[skillName] || 0;

                    if (skillName.toUpperCase() === "IA") {
                        bar.style.width = `${returnLevel}%`;
                        bar.setAttribute("aria-valuenow", String(returnLevel));
                        if (label) {
                            label.textContent = `${returnLevel}%`;
                        }
                        return;
                    }

                    // Proportional increase: from 50% of basePercentage back to basePercentage
                    const reduction = returnLevel / maxLevel;
                    const newWidth = basePercentage * (1 - 0.5 * reduction);

                    bar.style.width = `${newWidth}%`;
                    bar.setAttribute("aria-valuenow", String(Math.round(newWidth)));
                    if (label) {
                        label.textContent = `${Math.round(newWidth)}%`;
                    }
                });

                returnLevel = Math.max(0, returnLevel - 2);
                if (returnLevel > 0) {
                    window.setTimeout(animateReturn, 100);
                } else {
                    // Restart animation after reset
                    window.setTimeout(startAnimation, 500);
                }
            }

            animateReturn();
        }

        animateSkillsForward();
    }

    startAnimation();
}

initSkillsHumorAnimation();

function initSoftSkillsHumorAnimation() {
    const softSkillset = document.getElementById("soft-skillset");
    if (!softSkillset) {
        return;
    }

    const bars = softSkillset.querySelectorAll(".level-bar-inner");
    if (!bars.length) {
        return;
    }

    // Store initial percentages
    const initialValues = {};
    bars.forEach((bar) => {
        const skillName = (bar.dataset.skill || "").trim();
        const basePercentage = parseInt(bar.dataset.basePercentage || "0", 10);
        initialValues[skillName] = basePercentage;
    });

    function startAnimation() {
        let iaLevel = 0;
        const maxLevel = 100;

        function animateSoftSkillsForward() {
            bars.forEach((bar) => {
                const skillName = (bar.dataset.skill || "").trim();
                const label = bar.parentElement?.parentElement?.querySelector(".skill-level");
                const basePercentage = initialValues[skillName] || 0;

                if (skillName.toUpperCase() === "IA") {
                    bar.style.width = `${iaLevel}%`;
                    bar.setAttribute("aria-valuenow", String(iaLevel));
                    if (label) {
                        label.textContent = `${iaLevel}%`;
                    }
                    return;
                }

                // Random oscillation: ±5% around base percentage
                const randomVariation = (Math.random() - 0.5) * 10; // -5 to +5
                const newWidth = basePercentage + randomVariation;

                bar.style.width = `${newWidth}%`;
                bar.setAttribute("aria-valuenow", String(Math.round(newWidth)));
                if (label) {
                    label.textContent = `${Math.round(newWidth)}%`;
                }
            });

            iaLevel = Math.min(maxLevel, iaLevel + 2);
            if (iaLevel < maxLevel) {
                window.setTimeout(animateSoftSkillsForward, 100);
            } else {
                // Hold for 3 seconds then animate back
                window.setTimeout(animateSoftSkillsBackward, 3000);
            }
        }

        function animateSoftSkillsBackward() {
            let returnLevel = maxLevel;

            function animateReturn() {
                bars.forEach((bar) => {
                    const skillName = (bar.dataset.skill || "").trim();
                    const label = bar.parentElement?.parentElement?.querySelector(".skill-level");
                    const basePercentage = initialValues[skillName] || 0;

                    if (skillName.toUpperCase() === "IA") {
                        bar.style.width = `${returnLevel}%`;
                        bar.setAttribute("aria-valuenow", String(returnLevel));
                        if (label) {
                            label.textContent = `${returnLevel}%`;
                        }
                        return;
                    }

                    // Random oscillation: ±5% around base percentage
                    const randomVariation = (Math.random() - 0.5) * 10; // -5 to +5
                    const newWidth = basePercentage + randomVariation;

                    bar.style.width = `${newWidth}%`;
                    bar.setAttribute("aria-valuenow", String(Math.round(newWidth)));
                    if (label) {
                        label.textContent = `${Math.round(newWidth)}%`;
                    }
                });

                returnLevel = Math.max(0, returnLevel - 2);
                if (returnLevel > 0) {
                    window.setTimeout(animateReturn, 100);
                } else {
                    // Restart animation after reset
                    window.setTimeout(startAnimation, 500);
                }
            }

            animateReturn();
        }

        animateSoftSkillsForward();
    }

    startAnimation();
}

initSoftSkillsHumorAnimation();
//# sourceMappingURL=main.js.map