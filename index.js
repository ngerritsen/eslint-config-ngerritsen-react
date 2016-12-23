module.exports = {
  extends: 'plugin:react/recommended',
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-pascal-case': 2,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-indent-props': [2, 2],
    'react/no-multi-comp': 2,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 2,
    'react/prop-types': [2, {
      'ignore': [ 'children' ]
    }],
    'react/self-closing-comp': 2,
    'react/sort-prop-types': 1
  }
};
