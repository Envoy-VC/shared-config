# @envoy1084/style-guide

## 0.1.1

### Patch Changes

- 4df5459: ## Changes

  - Add Flat Eslint Config alongside base eslint config.

  ## Usage

  ```js
  import sharedConfig from '@envoy1084/style-guide/eslint/flat';

  export default [
    ...sharedConfig.configs.recommended,
    ...sharedConfig.configs.typescript,
    ...sharedConfig.configs.react,
    ...sharedConfig.configs.next,
  ];
  ```

## 0.1.0

### Minor Changes

- b2744e3: ## Initial Release (v0.1.0)

  - `ESLint`: Recommended Rules as per Vercel Style Guide Migrated to ESLint v9
  - `TypeScript`: Add Typescript Node 16,18,20 Config.
  - `Prettier`: Add Prettier Config with Auto Sort Imports for base and Next.js versions.
