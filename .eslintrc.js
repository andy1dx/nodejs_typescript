module.exports = {
    root: true,
    env: {
      es6: true,
      node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2019, // Node.js 12の場合は2019、他のバージョンのNode.jsを利用している場合は場合は適宜変更する
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.eslint.json']
    },
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
      'airbnb' // https://github.com/airbnb/javascript
    ],
    rules: {
      'prefer-object-spread': 0,
      '@typescript-eslint/no-explicit-any': 'off'
    },
  };