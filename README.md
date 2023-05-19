# Astro FiveM NUI Template

This is a template for creating a NUI resource for FiveM using Astro

## Features

- Build small NUIs (<100kb) 
- Image optimization and icons
- Style using Tailwind
- Easy to install fonts using [Fontsource](https://docs.astro.build/en/guides/fonts/#using-fontsource)
- [Cash](https://github.com/fabiospampinato/cash) a tiny(16kb) jQuery alternative
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

- This template comes with [Cash](https://github.com/fabiospampinato/cash) installed by default but you can use whatever you want for client side interactivity:
  - [Svelte](https://svelte.dev/), [SolidJS](https://www.solidjs.com/), [Preact](https://preactjs.com/)
  - [jQuery](https://github.com/jquery/jquery), [Zepto](https://github.com/madrobby/zepto), [UmbrellaJS](https://github.com/franciscop/umbrella)
  - [Micro DOM utilities](http://microjs.com/#dom)

- Do not use React or Vue in your NUI. The goal of this template it to create small/tiny/micro NUIs and both frameworks are too large


