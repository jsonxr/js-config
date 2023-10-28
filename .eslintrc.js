module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:promise/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'promise'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'require-await': 'error',
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'warn',
        'no-undef': 'warn',
        'no-console': 'off',
        'jest/no-disabled-tests': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
      },
    },
  ],
};
