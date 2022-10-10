import { storage } from "./mockStorage.js"
import { test } from "uvu"
import * as assert from "uvu/assert"
import { getFavorites, markFavorite, removeFavorite } from "../src/utils/storage.js"

globalThis.localStorage = storage

test.before.each(() => storage.clear())

test("User should be able to add a favorite", () => {
    
    markFavorite({id: 500})
    assert.is(storage.getItem("movies").length > 0, true)
})

test("User should be able to remove a favorite", () => {
    storage.setItem("movies", JSON.stringify([{id: 100}, {id: 200}, {id: 300}]))
    removeFavorite({id: 200})
    const movies = getFavorites()
    assert.is(movies.length, 2)
    assert.is(movies.find(it => it.id === 200), undefined)
})

test("User should be able to get their favorites", () => {
    let movies = getFavorites()
    assert.is(movies.length,  0)
    storage.setItem("movies", JSON.stringify([{id: 100}, {id: 200}, {id: 300}]))
    movies = getFavorites()
    assert.is(movies.length,  3)
})

test.run()