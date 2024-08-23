<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: nuxt-humble-modal
- Package name: humblera1/nuxt-humble-modal
- Description: Simple controls for your modal window
-->

# nuxt-humble-modal

[![Nuxt][nuxt-src]][nuxt-href]

Simple controls for your modal window

## Quick Setup

1. Add `nuxt-humble-modal` dependency to your project

```bash
# Using pnpm
pnpm add nuxt-humble-modal

# Using yarn
yarn add nuxt-humble-modal

# Using npm
npm install nuxt-humble-modal
```

2. Add `nuxt-humble-modal` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-humble-modal'
  ]
})
```

## Usage

Add component in `app.vue` file:

```vue
<template>
    <div>
        <HumbleModal />
        <!-- your code here -->
    </div>
</template>
```

Then use composable `useHumbleModal()`. For example:

```vue
<template>
    <button @click="openModal(ExampleModal)">Open Modal</button>
</template>

<script setup>
import ExampleModal from '~/components/ExampleModal.vue';
    
const { openModal, closeModal, toggleModal, isSpecificWindowOpen, isOpen } = useHumbleModal();
</script>
```

Use `closeModal()` function to close your modal, or `toggleModal()` to toggle it

Method `isSpecificWindowOpen()` allows you to find out whether a specific modal window component is open right now.
The `isOpen` property shows whether any window is open.

```vue
<template>
    <p>The ExampleModal is open right now: {{ isSpecificWindowOpen(ExampleModal) }}</p>
    <p>Some modal window is open right now: {{ isOpen }}</p>
</template>

<script setup>
import ExampleModal from '~/components/ExampleModal.vue';
    
const { isSpecificWindowOpen, isOpen } = useHumbleModal();
</script>
```


You can pass properties and event listeners through the second parameter of the setter:

```js
openModal(ExampleModal, { myProperty: 'some value', onMyEvent: someHandler})
```

You can change the backdrop transition and its appearance by css variables:

```css
:root {
  --humble-modal-transition: visibility 0.25s, opacity 0.25s;
  --humble-modal-backdrop: rgba(0, 0, 0, .5);
}
```

## API

useHumbleModal has some options that you can pass as a parameter of composable

`withBackdrop` - optional, default to true, determines whether the backdrop should be rendered.
Without a backdrop, next param makes no sense

`closeOnClickOutside` - optional, default to true, determines whether the window should be closed when clicking on a backdrop

`closeOnEsc` - optional, default to true, determines whether the window should be closed when pressing esc

<!-- Badges -->
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
