module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 2,
    semi: 0,
    camelcase: 2,
    'consistent-return': 2,
    eqeqeq: 2,
    'no-empty': 2,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
};
