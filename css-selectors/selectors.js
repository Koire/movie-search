import {calculate} from "./js/specificity.js"
import {h} from "../lib/h.js"

const cssInput = document.getElementById("inputBox")
const currentScore = document.getElementById("currentScore")
const styleSheetInput = document.getElementById("styleSheetInput")
const styleResults = document.getElementById("results")

const getSpecificityScore = text => calculate(text)[0].specificity

cssInput.addEventListener("input", ({target: {value}}) => {
    if (value.length === 0) return null
    currentScore.textContent = (value.includes("!important") ? "1," : "0,") + getSpecificityScore(value)
})

const listItem = rule => h("li", {
    "data-score": Number(getSpecificityScore(rule).split(",").join(""))
}, `${rule} -- ${getSpecificityScore(rule)}`)
const getStyleRules = styles => {
    const doc = document.implementation.createHTMLDocument()
    const styleElement = document.createElement("style")
    styleElement.textContent = styles
    doc.body.appendChild(styleElement)
    return Array.from(styleElement.sheet.cssRules)
}

styleSheetInput.addEventListener("input", ({target: {value}}) => {
    styleResults.textContent = ""
    const resultList = getStyleRules(value)
        .flatMap(({selectorText}) => selectorText && selectorText.split(","))
        .filter(rule => rule)
        .map(listItem)
    styleResults.appendChild(h("div", {}, [
        resultList.length >0 ? "結果：" : "",
        h("ul",
            {},
            resultList
        )
    ]))

})
