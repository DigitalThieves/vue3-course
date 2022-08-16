module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/singleline-html-element-content-newline': 0,
    'no-undef': 0,
    'quotes': ['error', 'single', { 'avoidEscape': true } ]
  },
}