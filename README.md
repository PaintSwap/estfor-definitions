# Estfor Kingdom Types & Constants (estfor-definitions)

[Estfor Kingdom](https://estfor.com/) `types` and `constants` available for 
[<img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/JavaScript.svg" height="15"/> Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript), 
[<img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/TypeScript.svg" height="15"/> TypeScript](https://www.npmjs.com/package/typescript), and 
[ <img src="https://avatars1.githubusercontent.com/u/28916798?s=15" height="15"/> AssemblyScript / <img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/WebAssembly.svg" height="15"/> WebAssembly](https://www.npmjs.com/package/assemblyscript).

The items in this library will allow you to interact with Estfor Kingdom via:

- Vanilla JS applications
- React, Angular, and other front end frameworks
- NodeJS / Typescript back end services
- AssemblyScript / WebAssembly for use with [The Graph Protocol](https://github.com/graphprotocol/graph-node)'s web3 indexing

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
const MAPLE_LOG = EstforConstants.MAPLE_LOG
```

It is also possible to import specific items directly.

```ts
import { LOG } from '@paintswap/estfor-definitions/constants'
import { Skill } from '@paintswap/estfor-definitions/types'
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

#### NPM

From library root:

```shell
npm link
```

From project root:

```shell
npm link @paintswap/estfor-definitions
```

#### Yarn

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
