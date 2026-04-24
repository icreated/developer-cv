// Trusted Types policies for third-party libraries
if (typeof trustedTypes !== 'undefined') {
    try {
        // FontAwesome CSS injection policy
        trustedTypes.createPolicy('fontawesome', {
            createHTML: (input) => {
                // FontAwesome only injects safe CSS/style tags
                return input;
            }
        });
    } catch (e) {
        // Policy might already exist
    }

    try {
        // GitHub Calendar HTML policy
        trustedTypes.createPolicy('github-calendar', {
            createHTML: (input) => {
                // GitHub Calendar injects safe SVG content
                return input;
            }
        });
    } catch (e) {
        // Policy might already exist
    }
}
//# sourceMappingURL=trusted-types-policies.js.map
