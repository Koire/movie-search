# Movie Query

 Simple Project for querying Movies from tMDB

## Notes

I thought hard about using a framework or just writing in JavaScript... I could write for a while about the difficulty and conflict about that decision. Ultimately, the project requirements are quite small, but a little time consuming, so I decided just to do this without a framework (like Vue, React, Angular, Svelte, HyperApp, Astro). A benefit of just using JavaScript, HTML and CSS means there is no build step, this can be just dropped into a server and just work.

I chose UVU because I used AVA in the past and they are remarkably fast testing libraries compared to Jest, and UVU is just a test runner.

I also chose to ignore page results in favor of trying to make it look better and have some fun with the css.

## Development
I use live server to serve the website, you can install that locally or globally, it's included in package.json. You have to use a server because I chose to use esmodules which is supported in every main browser except IE (but IE is/should be deprecated)
`npm run develop` to start the live-server on port 8080, http://localhost:8080/src

## Testing
`npm run watch` to trigger UVU to watch the folders and execute tests on any change
`npm run test` to just run the tests once
