module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:react-redux/recommended'],
  plugins: ['prettier', 'react-hooks', 'react-redux'],
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-shadow': 0,
    'no-mixed-operators': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-redux/useSelector-prefer-selectors': 0,
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: true,
      },
    ],
    camelcase: ['error', { properties: 'never' }],
  },
  overrides: [
    {
      files: ['src/domain/**'],
      rules: {
        'no-param-reassign': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.json', '.jsx'],
          },
        },
      },
    },
  },
};
