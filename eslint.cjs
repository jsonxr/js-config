module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'promise', 'prettier'],
  extends: [
    'plugin:promise/recommended',
    'prettier',
    'plugin:jest/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx', '*.json'],
      rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        'require-await': 'error',
        'no-shadow': 'off', // doesn't allow reuse of simple variable names
        'no-undef': 'warn',
        'no-console': 'warn',
        // Jest
        'jest/no-commented-out-tests': 'off',
        'jest/no-disabled-tests': 'off',
      },
    },
  ],
  env: {
    jest: true,
    node: true,
    browser: true,
  },
};
