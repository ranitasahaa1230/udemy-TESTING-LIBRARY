# Starter with Vite, React Testing Library and Vitest

## How this project was created

This project was created using this command:

```sh
npm create vite@latest vite-starter -- --template react
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.jsx
- this README file 😄

## Installing Vitest and React Testing Library in a Vite project

### Install dependencies

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react
```

## Add test scripts to package.json `test` object

```json
    "test": "vitest run",
    "test:ui": "vitest --ui",
    "test:watch": "vitest"
```

## Add a setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _test/setup.js_
1. add these contents:

```js
import "@testing-library/jest-dom";
```

## Add Vitest globals to ESLint to avoid errors

This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

In _.eslintrc.cjs_:

1. Add `"plugin:vitest/recommended"` to the `extends` array
1. Add this property / value to the top-level `module.exports` object:

```js
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
```

## Update vite configuration for tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file that we created earlier
    setupFiles: "./test/setup.js",
    // you might want to disable it, if you don't have tests that rely on CSS
    // since parsing CSS is slow
    css: true,
  },
```

## Command to run tests

```sh
npm test
```

### in watch mode

To re-run applicable tests when code changes:

```sh
npm run test:watch
```

### UI

To use the [Vitest UI](https://vitest.dev/guide/ui.html):

```sh
npm run test:ui
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)