module.exports = {
  extends: '@it-incubator/eslint-config',
  rules: { 'no-console': ['warn', { allow: ['warn', 'error'] }], 'plugins': ['jest'], 'env': {
      'jest/globals': true
    } },
}