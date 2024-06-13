module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "semi": "off",
    "no-debugger": "warn",
    "no-underscore-dangle": 0,
    "max-len": [
      2,
      {
        "code": 160,
        "ignoreUrls": true
      }
    ],
    "react/prop-types": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-deprecated": 0,
    "react/destructuring-assignment": 0,
    "no-useless-escape": 0,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "no-unsafe-optional-chaining": 0,
    "function-paren-newline": 0,
    "default-param-last": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/no-unstable-nested-components": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ]
  },
}
