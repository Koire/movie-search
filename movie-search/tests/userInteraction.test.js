import { test } from "uvu"
import * as assert from "uvu/assert"
import * as ENV from "./puppeteer.js"

test.before(ENV.setup)
test.after(ENV.reset)

test("Title is Movie Search", async ctx => {
    await ctx.page.goto("http://localhost:8080/src")
    const title = await ctx.page.evaluate(() => {
        return document.querySelector("h1").textContent
    })
    assert.type(title, "string")
    assert.is(title, "Movie Search!")
})

test("User can search", async ctx => {
    await ctx.page.goto("http://localhost:8080/src")
    await ctx.page.waitForSelector("#movie-search")
    await ctx.page.type("#movie-search", "Gone with the wind")
    await ctx.page.waitForSelector("#resultsList")
    const input = await ctx.page.evaluate(() => {
        return document.querySelector("#movie-search").value
    })
    assert.is(input, "Gone with the wind")
    const results = await ctx.page.evaluate(() => {
        const resultsList = document.querySelector("#resultsList")
        return resultsList
    })
    console.log(results)
})

test.run()