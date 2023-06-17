const selectorKebabCaseRE = /^([a-z][\da-z]*)((-|__)[\da-z]+)*$/;
const selectorKebabCaseMessage = "Use kebab-case in selectors";
module.exports = {
    extends: ["stylelint-config-vue-cakkypamucm"],
    rules: {
        "scss/load-partial-extension": "never",
        "scss/at-import-partial-extension-disallowed-list": [""],
        "selector-class-pattern": [
            selectorKebabCaseRE,
            {
                message: selectorKebabCaseMessage
            }
        ],
        "selector-id-pattern": [
            selectorKebabCaseRE,
            {
                message: selectorKebabCaseMessage
            }
        ]
    }
};
