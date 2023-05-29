module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript'
  ],
  ignorePatterns: [ '**/*.d.ts' ],
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'no-undef': 0,
    'vue/no-v-html': 0,
    'quotes': ['error', 'single', { 'avoidEscape': true } ]
  },
}