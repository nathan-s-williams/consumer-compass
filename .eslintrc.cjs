module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  parser: '@typescript-eslint/parser',
  settings: { react: { version: '18.2' } },
  plugins: [
      'react-refresh',
      '@typescript-eslint'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // '@typescript-eslint/interface-name-prefix': [
    //   'warn',
    //   { 'prefixWithI': 'always' }
    // ],
  },
}
