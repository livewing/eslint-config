# `@livewing/eslint-config`

[![CI](https://github.com/livewing/eslint-config/workflows/CI/badge.svg)](https://github.com/livewing/eslint-config/actions?query=workflow%3ACI)
[![LICENSE](https://img.shields.io/github/license/livewing/eslint-config)](./LICENSE)
[![npm](https://img.shields.io/npm/v/@livewing/eslint-config)](https://www.npmjs.com/package/@livewing/eslint-config)

ESLint [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs.html)

## Installation

```sh
npm i -D eslint prettier typescript @livewing/eslint-config
```

## Usage

Create `.editorconfig` file in your project root.

```ini
root = true

charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```

Then specify [`@livewing`](./src/index.yml) in the `extends` section of your ESLint configuration.

```yaml
# .eslintrc.yml

root: true
extends: "@livewing"
```

If you are using React, specify [`@livewing/eslint-config/react`](./src/react.yml) instead of `@livewing`.

```yaml
# .eslintrc.yml

root: true
extends: "@livewing/eslint-config/react"
```

## Examples

### Next.js + Tailwind CSS

```sh
npm i -D eslint-config-next eslint-plugin-tailwindcss
```

```yaml
# .eslintrc.yml

root: true
extends:
  - "@livewing/eslint-config/react"
  - next/core-web-vitals
  - plugin:tailwindcss/recommended
rules:
  jsx-a11y/anchor-is-valid: off
```

## Visual Studio Code settings

```jsonc
// .vscode/extensions.json

{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "EditorConfig.EditorConfig",
    "esbenp.prettier-vscode"
  ]
}
```

```jsonc
// .vscode/settings.json

{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "typescript.tsdk": "node_modules/typescript/lib",
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.formatOnSave": false
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false
  }
}
```
