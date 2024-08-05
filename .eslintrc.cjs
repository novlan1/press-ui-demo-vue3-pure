/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'eslint-config-light-vue3',
  ],
  globals: {
    getCurrentPages: true,
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
};
