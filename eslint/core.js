module.exports = {
  extends: ['plugin:promise/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'promise'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'require-await': 'error',
        'no-shadow': 'warn',
        'no-undef': 'warn',
        'no-console': 'off',
        'jest/no-disabled-tests': 'off'
      },
    },
  ],
};
