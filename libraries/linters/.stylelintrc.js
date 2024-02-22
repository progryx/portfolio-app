const prettierConfig = require('./prettierrc')

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  plugins: [
    'stylelint-prettier',
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'prettier/prettier': [true, prettierConfig],
    'import-notation': 'string',
    'declaration-block-no-duplicate-properties': true,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-no-important': true,
    'function-name-case': null,
    'no-invalid-double-slash-comments': null,
    'value-keyword-case': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'comment-empty-line-before': null,
    'at-rule-no-unknown': null,
    'selector-class-pattern': [/^.[a-z]([a-z0-9A-Z]+)*(_[a-z0-9]([a-z0-9A-Z]+)*)?(__[a-z0-9]([a-z0-9A-Z]+)*)?$/,
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `Expected class selector "${selectorValue}" to match BEM CSS pattern`;
        },
      },
    ],
    'selector-id-pattern': [/^.[a-z]([a-z0-9A-Z]+)*(_[a-z0-9]([a-z0-9A-Z]+)*)?(__[a-z0-9]([a-z0-9A-Z]+)*)?$/,
      {
        resolveNestedSelectors: true,
        message: function expected(selectorValue) {
          return `Expected ID selector "${selectorValue}" to match BEM CSS pattern`;
        },
      },
    ],
    'scss/at-rule-no-unknown': true,
    'scss/declaration-nested-properties': 'never',
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/percent-placeholder-pattern': '^do-not-use-placeholders$',
    'scss/at-function-named-arguments': null,
    'scss/at-mixin-named-arguments': null,
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/no-duplicate-dollar-variables': true,
    'scss/no-duplicate-mixins': true,
    'scss/map-keys-quotes': 'always',
    'scss/function-unquote-no-unquoted-strings-inside': true,
    'scss/function-quote-no-quoted-strings-inside': true,
    'scss/dimension-no-non-numeric-values': true,
    'scss/comment-no-loud': true,
    'scss/at-import-partial-extension': 'never',
    'scss/at-if-no-null': true,
    'scss/at-each-key-value-single-line': true,
    'order/properties-order': [],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': true,
      },
    ],
  },
  ignoreFiles: [],
};
