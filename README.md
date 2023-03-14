# estfor-definitions

Types and Constants for [Estfor Kingdom](https://www.estfor.com/).

## Usage

To use Estfor Kingdom types and constants in your project, first import the dev dependency:

```shell
npm install -D @paintswap/estfor-definitions  # NPM
```

```shell
yarn add -D @paintswap/estfor-definitions     # Yarn
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
npm run build   # NPM
```

```shell
yarn build      # Yarn
```

### Use Locally

#### NPM

From library root:

```shell
npm link        # NPM
```

From project root:

```shell
npm link @paintswap/estfor-definitions  # NPM
```

#### Yarn

From library root:

```shell
yarn link       # Yarn
```

From project root:

```shell
yarn link @paintswap/estfor-definitions # Yarn
```

#### Yalc

Install `yalc`

```shell
npm install -g yalc@latest  # NPM
yarn add -g yalc@latest     # Yarn
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
npm publish     # NPM
```

```shell
yarn publish    # Yarn
```
