// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    ignores: ['dist/*'],
    rules: {
      'import/no-unresolved': 'off'
    }
  },
]);
