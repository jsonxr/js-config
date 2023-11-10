module.exports = {
  extends: ['plugin:promise/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'promise', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': 'error',
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
