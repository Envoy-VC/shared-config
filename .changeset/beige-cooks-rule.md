---
'@envoy1084/style-guide': patch
---

## Changes

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
