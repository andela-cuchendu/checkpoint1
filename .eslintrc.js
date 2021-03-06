module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
    'rules': {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'react/jsx-no-literals': "off",
    "class-methods-use-this": ["off", { "exceptMethods": ["getItemsState",
    "componentWillMount","getInitialState"] }],
    "jsx-a11y/no-static-element-interactions": ["off", { handlers: ['onMouseDown',]}],
  },
  "parserOptions": {
  "ecmaVersion": 6,
  jsx: true,
  },
  "globals": {
    "window": true,
    "document": true
  }
};