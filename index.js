const selectorKebabCaseRE = /^([a-z][\da-z]*)(-[\da-z]+)*$/;
const selectorKebabCaseMessage = "Use kebab-case in selectors";
module.exports = {
    extends: ["stylelint-config-cakkypamucm", "stylelint-config-vue-cakkypamucm", "stylelint-config-prettier"],
    rules: {
        "scss/at-import-partial-extension": "never",
        "scss/at-import-partial-extension-blacklist": [""],
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
