module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  extends: ["plugin:prettier/recommended", "airbnb"],
  plugins: ["react", "jsx-a11y", "import", "prettier"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0, { ignorePureComponents: true }],
    "react/prop-types": [0],
    "func-names": ["error", "never"],
    quotes: "off",
    "prop-types": "off",
    camelcase: "off",
    "no-continue": "off",
    "guard-for-in": "off",
    "no-unused-vars": "off",
    "global-require": "off",
    "no-param-reassign": "off",
    "prettier/prettier": "off",
    "consistent-return": "off",
    "no-unused-expressions": "off",
    "no-restricted-syntax": "off",
    "react/no-array-index-key": "off",
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "eslint-disable prefer-destructuring": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
};