# VUE 3 Experiment

## This is a side project to learn VUE 3 JS and explore its features.

## Data source: https://whiskyhunter.net/api/

## Deployment tool: Vercel

## Notes

# VUE JS app mounting

In an index/app html there should be a `div` that wraps all the html with a specific id (usully it is **#app**). Below this wrapper, there shoudl be a script tag with code for app creation. The app is usuly saved in a variable

`let app = Vue.createApp({})`

This `createApp` method receives an options object that can have the following properties:

- data -> a function that returns an object with all the properties available in the html. To access these varaibles insisde html, **double moustache** syntax is used ({{ theVariable }}).
- methods -> an object that defines for each property some JS methods that are avaialbe in the template (html). To access a varaible defined in the data method, **this** context is required (this.someVariable)
