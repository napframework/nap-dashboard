# NAP Dashboard

NAP Dashboard uses the [NAP Portal](https://github.com/napframework/nap-portal) module to generate a ready-made control interface for you NAP application.

## Installation

Install the packages from NPM:

```shell
$ npm install
```

## Configuration

Open the `nap.config.ts` file and adjust it to your configuration.

| Property | Description |
| --- | ----------- |
| `socket.host` | The host that exposes the NAP WebSocket server (e.g. `localhost`, `192.168.1.10`) |
| `socket.port` | The port that exposes the NAP WebSocket server (e.g. `2000`) |
| `socket.user` | The user name for authentication with the NAP WebSocket server |
| `socket.pass` | The password for authentication with the NAP WebSocket server |
| `socket.secure` | Whether to use a secure connection (wss, https) or insecure (ws, http) |
| `portals[].id` | The ID of the portal component specified in the NAP application |
| `portals[].name` | The name of the portal that will show in the web interface |
| `portals[].path` | The path of the address route where this component will be available |

## Usage

Run the dashboard in development mode:

```shell
$ npm run dev
```

Build a deployable distribution of the dashboard:

```shell
$ npm run build
```

Preview the distribution build:

```shell
$ npm run preview
```

## Extending NAP Dashboard

In case you want to use this repository as your own project starter, you might want more information about the setup. It is created using `npm init vite@latest` using the `vue-ts` template.

### Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
