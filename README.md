# @jsonxr/config

Share configuration between projects.

Installs
- typescript
- eslint, prettier and plugins
- jest


# Configuration

- Install @jsonxr/config

  ```sh
  yarn add --dev @jsonxr/config
  ```

- `.eslintrc.cjs`

  ```js
  module.exports = {
    ...require('@jsonxr/config/eslint.cjs'),
  };
  ```

  [eslint settings](eslint.cjs)

- `.prettierrc.cjs`

  ```js
  module.exports = {
    ...require('@jsonxr/config/prettier.cjs'),
  };
  ```

  [prettier settings](prettier.cjs)
