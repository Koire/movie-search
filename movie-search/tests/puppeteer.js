import Chrome from "puppeteer"

export const setup = async (ctx) => {
    ctx.browser = await Chrome.launch()
    ctx.page = await ctx.browser.newPage()
}

export const reset = async (ctx) => {
    await ctx.page.close()
    await ctx.browser.close()
}

export const homepage = async (ctx) => {
    await ctx.page.goto("http://localhost:8080")
}