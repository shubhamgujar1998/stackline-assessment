# Assessment overview

The objective of this project was to build a simple product web page using React for the user interface and Redux for state management, closely following the provided wire mockup. The implementation included either a chart, a table, or both to display the data.

## Features

- **React** for building the user interface
- **Redux Toolkit** for state management
- **Material UI Data Grid** for representing product sales data
- **Material UI Charts** for line chart visualization
- **TailwindCSS** for modern and responsive styling
- Added **Skeleton** loading using Material UI for better User experience
Note: To show the use-case of Skeleton loading for users with fast internet speed, I have deliberately added a timeout of 500ms so the Skeleton loads first.

## Deployment

- I have deployed the assessment to Github Page [Github Page]() with project repository available on [Stackline Assessment]().

## Vite installation boilerplate

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
