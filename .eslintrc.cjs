module.exports = {
  root: true,
  env: { "jest": true, browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    "plugin:@typescript-eslint/eslint-recommended", // ESLint overrides for TypeScript
    "prettier",                             // Prettier rules
    "plugin:prettier/recommended",          // Prettier plugin integration
    "plugin:react-hooks/recommended",       // Recommended rules for React hooks
    "plugin:storybook/recommended"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
