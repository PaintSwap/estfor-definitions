# estfor-definitions

Types and Constants for [Estfor Kingdom](https://estfor.com/) available for [TypeScript](https://www.npmjs.com/package/typescript) and [AssemblyScript](https://www.npmjs.com/package/assemblyscript).

## Usage

To use Estfor Kingdom types and constants in your project, first import the dev dependency:

```shell
npm install -D @paintswap/estfor-definitions
```

```shell
yarn add -D @paintswap/estfor-definitions
```

Once installed, the `EstforConstants`, `EstforTypes`, and `NONE` type will be exposed. You can then access the individual types from their parent.

```ts
import { EstforConstants, EstforTypes, NONE } from '@paintswap/estfor-definitions'
const { LOG } = EstforConstants
const LOG = EstforConstants.LOG
```

It is also possible to import specific items directly.

```ts
import { LOG } from '@paintswap/estfor-definitions/dist/constants'
import { Skill } from '@paintswap/estfor-definitions/dist/types'
```

## Development

### Build

```shell
npm run build
```

```shell
yarn build
```

### Use Locally

###

From library root:

```shell
npm link
```

From project root:

```shell
npm link @paintswap/estfor-definitions
```

###

From library root:

```shell
yarn link
```

From project root:

```shell
yarn link @paintswap/estfor-definitions
```

#### Yalc

Install `yalc`

```shell
npm install -g yalc@latest
```

```shell
yarn add -g yalc@latest
```

From library root:

```shell
yalc publish
```

From project root:

```shell
yalc add @paintswap/estfor-definitions
```

Use newly published updates to local yalc repository.

```shell
yalc update
```

Revert to NPM Repository

```shell
yalc remove @paintswap/estfor-definitions
yarn add @paintswap/estfor-definitions
```

### Publish to NPM (--access=public needed the first time)

```shell
npm publish
```

```shell
yarn publish
```
