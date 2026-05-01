"use strict";

document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(el => new bootstrap.Tooltip(el));

// Lazy-init helper: run fn() only when element enters the viewport
function lazyInit(id, fn) {
    const el = document.getElementById(id);
    if (!el) return;
    const obs = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            observer.disconnect();
            fn();
        }
    }, { threshold: 0.1 });
    obs.observe(el);
}

// GitHub Calendar — https://github.com/IonicaBizau/github-calendar
if (document.getElementById("github-graph")) {
    // Drop stale cache entries (non-HTML values from earlier proxy bug)
    const cached = localStorage.getItem("gh_calendar_content.icreated");
    if (!cached || !cached.includes("<")) {
        localStorage.removeItem("gh_calendar_content.icreated");
        localStorage.removeItem("gh_calendar_expire.icreated");
    }
    // Defer calendar fetch until section is visible
    lazyInit("github-graph", () => {
        GitHubCalendar("#github-graph", "icreated", {
            responsive: true,
            global_stats: false,
            proxy: username => fetch(
                `https://api.bloggify.net/gh-calendar/?username=${username}`,
                { credentials: "omit" }
            ).then(r => r.text())
        }).catch(() => {});
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
    if (!skillset) return;

    const bars = skillset.querySelectorAll(".level-bar-inner");
    if (!bars.length) return;

    const initialValues = {};
    bars.forEach((bar) => {
        const skillName = (bar.dataset.skill || "").trim();
        initialValues[skillName] = parseInt(bar.dataset.basePercentage || "0", 10);
    });

    // Cache label references once — avoids repeated querySelector per frame
    const labelMap = new Map();
    bars.forEach((bar) => {
        labelMap.set(bar, bar.parentElement?.parentElement?.querySelector(".skill-level") || null);
    });

    function applyFrame(level) {
        // DOM writes happen directly inside the rAF callback that called us
        bars.forEach((bar) => {
            const skillName = (bar.dataset.skill || "").trim();
            const label = labelMap.get(bar);
            const base = initialValues[skillName] || 0;
            const isIA = skillName.toUpperCase() === "IA";
            const w = isIA ? level : base * (1 - 0.5 * (level / 100));
            const rounded = Math.round(w);
            bar.style.width = `${w}%`;
            bar.setAttribute("aria-valuenow", String(rounded));
            if (label) label.textContent = `${rounded}%`;
        });
    }

    function startAnimation() {
        let level = 0;
        let lastTime = 0;
        const STEP_MS = 100; // 10 fps — half the reflows, visually smooth

        function forward(ts) {
            if (ts - lastTime >= STEP_MS) {
                lastTime = ts;
                applyFrame(level);
                level = Math.min(100, level + 2);
            }
            if (level < 100) requestAnimationFrame(forward);
            else setTimeout(() => requestAnimationFrame(backward), 3000);
        }

        function backward(ts) {
            if (ts - lastTime >= STEP_MS) {
                lastTime = ts;
                applyFrame(level);
                level = Math.max(0, level - 2);
            }
            if (level > 0) requestAnimationFrame(backward);
            else setTimeout(startAnimation, 500);
        }

        requestAnimationFrame(forward);
    }

    startAnimation();
}

lazyInit("skillset", initSkillsHumorAnimation);

function initSoftSkillsHumorAnimation() {
    const softSkillset = document.getElementById("soft-skillset");
    if (!softSkillset) return;

    const bars = softSkillset.querySelectorAll(".level-bar-inner");
    if (!bars.length) return;

    const initialValues = {};
    bars.forEach((bar) => {
        const skillName = (bar.dataset.skill || "").trim();
        initialValues[skillName] = parseInt(bar.dataset.basePercentage || "0", 10);
    });

    const labelMap = new Map();
    bars.forEach((bar) => {
        labelMap.set(bar, bar.parentElement?.parentElement?.querySelector(".skill-level") || null);
    });

    function applyFrame(level) {
        bars.forEach((bar) => {
            const skillName = (bar.dataset.skill || "").trim();
            const label = labelMap.get(bar);
            const base = initialValues[skillName] || 0;
            const isIA = skillName.toUpperCase() === "IA";
            const w = isIA ? level : base + (Math.random() - 0.5) * 10;
            const rounded = Math.round(w);
            bar.style.width = `${w}%`;
            bar.setAttribute("aria-valuenow", String(rounded));
            if (label) label.textContent = `${rounded}%`;
        });
    }

    function startAnimation() {
        let level = 0;
        let lastTime = 0;
        const STEP_MS = 100;

        function forward(ts) {
            if (ts - lastTime >= STEP_MS) {
                lastTime = ts;
                applyFrame(level);
                level = Math.min(100, level + 2);
            }
            if (level < 100) requestAnimationFrame(forward);
            else setTimeout(() => requestAnimationFrame(backward), 3000);
        }

        function backward(ts) {
            if (ts - lastTime >= STEP_MS) {
                lastTime = ts;
                applyFrame(level);
                level = Math.max(0, level - 2);
            }
            if (level > 0) requestAnimationFrame(backward);
            else setTimeout(startAnimation, 500);
        }

        requestAnimationFrame(forward);
    }

    startAnimation();
}

lazyInit("soft-skillset", initSoftSkillsHumorAnimation);
//# sourceMappingURL=main.js.map