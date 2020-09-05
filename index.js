module.exports = {
    extends: [
      './rules/best-practices',
      './rules/errors',
      './rules/style',
      './rules/variables',
      './rules/es6',
    ].map(require.resolve),
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    rules: {},
  };