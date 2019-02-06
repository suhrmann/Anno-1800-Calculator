module.exports = {
  'root': true,
  'env': {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    'google',
  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // Custom project rules:
    // Severity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '120').
    'max-len': [2, {
      code: 120,
      tabWidth: 2,
    }],
    'semi': [2, 'always'],
  },
  'parserOptions': {
    parser: 'babel-eslint',
  },
};
