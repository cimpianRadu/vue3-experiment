# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# VUE 3 Experiment

## This is a side project to learn VUE 3 JS and explore its features.

## Data source: https://whiskyhunter.net/api/

## Deployment tool: Vercel

## UI Library: [Balm UI](https://next-material.balmjs.com/#/)

## Notes

# VUE JS app mounting

In an index/app html there should be a `div` that wraps all the html with a specific id (usully it is **#app**). Below this wrapper, there shoudl be a script tag with code for app creation. The app is usuly saved in a variable

`let app = Vue.createApp({})`

This `createApp` method receives an options object that can have the following properties:

- data -> a function that returns an object with all the properties available in the html. To access these varaibles insisde html, **double moustache** syntax is used ({{ theVariable }}).
- methods -> an object that defines for each property some JS methods that are avaialbe in the template (html). To access a varaible defined in the data method, **this** context is required (this.someVariable)
