# estfor-definitions
Types and Constants for Estfor

## Build

    yarn build

## Publish to NPM (--access=public needed the first time)

    yarn publish

## Dev use locally using yarn

From library root:

    yarn link

From project root:

    yarn link @paintswap/estfor-definitions

## Dev use locally using yalc

From library root:

    yalc publish

From project root:
  
    yalc link @paintswap/estfor-definitions

Push live updates to projects (library root)

    yarn build
    yalc push

## Restore NPM version

    yarn add @paintswap/estfor-definitions

## Normal Usage

    yarn add @paintswap/estfor-definitions

    import { EstforConstants, EstforTypes } from '@paintswap/estfor-definitions'
    const { LOG } = EstforConstants
    const LOG = EstforConstants.LOG

Can also do single imports:

    import { LOG } from '@paintswap/estfor-definitions/dist/constants'
    import { Skill } from '@paintswap/estfor-definitions/dist/types'

