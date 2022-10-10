import { test } from "uvu"
import * as assert from "uvu/assert"
import fetch from "node-fetch"
import { searchMovies, getMovieDetails } from "../src/utils/requests.js"

globalThis.fetch = fetch

test.skip("Fetches a movie from the API", async () => {
    const response = await searchMovies("Gone with the wind")
    assert.is(response.results.length > 0, true)
})

test.skip("Finds details about a movie", async() => {
    const response = await getMovieDetails(500)
    //#500 is Reservoir Dogs
    assert.is(response.title, "Reservoir Dogs")
})

test.run()