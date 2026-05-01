"use strict";

document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => new bootstrap.Tooltip(el));

// GitHub Calendar — https://github.com/IonicaBizau/github-calendar
if (document.getElementById("github-graph")) {
    // Drop stale cache entries (non-HTML values from earlier proxy bug)
    const cached = localStorage.getItem("gh_calendar_content.icreated");
    if (!cached || !cached.includes("<")) {
        localStorage.removeItem("gh_calendar_content.icreated");
        localStorage.removeItem("gh_calendar_expire.icreated");
    }
    GitHubCalendar("#github-graph", "icreated", {
        responsive: true,
        global_stats: false,
        proxy: username => fetch(
            `https://api.bloggify.net/gh-calendar/?username=${username}`,
            { credentials: "omit" }
        ).then(r => r.text())
    }).catch(() => {});
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
    bars.forEach((bar) => {
        const skillName = (bar.dataset.skill || "").trim();
        const basePercentage = parseInt(bar.dataset.basePercentage || "0", 10);
        initialValues[skillName] = basePercentage;
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
                setTimeout(animateSkillsForward, 100);
            } else {
                setTimeout(animateSkillsBackward, 3000);
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
                    setTimeout(animateReturn, 100);
                } else {
                    setTimeout(startAnimation, 500);
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
                setTimeout(animateSoftSkillsForward, 100);
            } else {
                setTimeout(animateSoftSkillsBackward, 3000);
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
                    setTimeout(animateReturn, 100);
                } else {
                    setTimeout(startAnimation, 500);
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