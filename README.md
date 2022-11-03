# Guilds

[![Test](https://github.com/asoltd/guilds/actions/workflows/test.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/test.yml)
[![Lint](https://github.com/asoltd/guilds/actions/workflows/lint.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/lint.yml)
[![Build](https://github.com/asoltd/guilds/actions/workflows/build.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/build.yml)
[![Style](https://github.com/asoltd/guilds/actions/workflows/style.yml/badge.svg)](https://github.com/asoltd/guilds/actions/workflows/style.yml)

## Features

- [Bun](https://bun.sh)
- [Next.js](https://nextjs.org/docs)
- [React](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/)
- [Firebase](https://firebase.google.com/docs) with [Firebase Emulators](https://firebase.google.com/docs/emulator-suite)
- [Reactfire](https://github.com/firebaseextended/reactfire)
- CSS in JS using [styled-components](https://styled-components.com/)
- [Prettier](https://prettier.io/)
- [Typescript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- CI workflows for style/lint/build
- CD with [Vercel](https://vercel.com/)

## Installation

```sh
bun install
```

## Usage

First, install the firebase tools if you haven't already:

```sh
bun install -g firebase-tools
```

Start the firebase emulators:

```sh
firebase emulators:start
```

Then to run development server on [http://localhost:3000](http://localhost:3000)
with hot-reload:

```sh
bun next dev
```

The NextJS compliler is written is Rust so it is super fast, yet also
well-maintained. There is also an option to run the dev server with bun, but it
has its hickups.

```sh
bun dev --reload
```

Mainly, there are some issues with bundling NextJS and the firebase
authentication with emulators struggles.

## License

MIT
