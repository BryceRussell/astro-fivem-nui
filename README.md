<span>
  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-VEePVB7eAyE%2FX2TrnPDr6aI%2FAAAAAAAAA_E%2FA8BlFuvwQIMB61UkF1STc2kdC8Zrj78nQCPcBGAYYCw%2Fs512%2Ffivem-logo.png&f=1&nofb=1&ipt=ac3a853084b6093f1719d992c28b90c9ecbd2562cf810e16eea932f1ed3302b9&ipo=images" width="96" height="96">
  <img src="https://astro.build/assets/press/astro-logo-dark.svg">
<span>

# Astro FiveM NUI Template

This is a template for creating a [FiveM](https://fivem.net/) [NUI resource](https://docs.fivem.net/docs/scripting-manual/nui-development/) using Astro

## Features

- Easily build small(<100kb) NUIs
- Tailwind preinstalled for styling
- Image optimization and icons
- Custom NUI utility to make message handling, callbacks, etc easier

## How to Use

1) [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) the project into a [local dev server](https://docs.fivem.net/docs/server-manual/setting-up-a-server/)

2) Use the terminal to naviagte to the `dev` folder (`cd dev`)

3) Once inside the `dev` folder, use [pnpm](https://pnpm.io/installation#using-npm) to install all dependencies: `pnpm i`

4) Start building your NUI inside the `dev/src/pages/index.astro` file

**Testing in a Browser**:

1) Use the command `pnpm dev` to start a dev server at https://localhost:3000

**Testing In-game**:

1) Use the command `pnpm  build` to build your NUI. This will create a folder named `html` used by the resource

2) Use the command `restart [resource-name]` inside your FiveM server
 

## Notes




