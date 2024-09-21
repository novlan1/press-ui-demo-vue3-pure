
module.exports = {
  root: true,
  extends: [
    'eslint-config-light-vue3',
  ],
  globals: {
    getCurrentPages: true,
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    extraFileExtensions: ['.vue'],
  },
};
