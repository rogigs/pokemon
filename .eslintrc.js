module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": "off",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "airbnb/hooks",
  ],
  plugins: ["jest", "only-warn"],
};
