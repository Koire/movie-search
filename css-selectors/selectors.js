import {calculate} from "./js/specificity.js"
import {css} from "./js/css.js"

const cssInput = document.getElementById("inputBox")
const currentScore = document.getElementById("currentScore")
const styleSheetInput = document.getElementById("styleSheetInput")
const styleResults = document.getElementById("results")

cssInput.addEventListener("input", ({target: {value}}) => {
    if (value.length === 0) return null
    currentScore.textContent = (value.includes("!important") ? "1," : "0,") + calculate(value)[0].specificity
})


styleSheetInput.addEventListener("input", ({target: {value}}) => {
    if (value.length === 0) return null
    const parsedCSS = css.parseCSS(value)
    parsedCSS.forEach(({selector}) => {
        selector.split(",").map(singleMatch => {

            const result = document.createElement("li")
            result.textContent = `${singleMatch} -- ${calculate(singleMatch).map(({specificity}) => specificity).join(",")}`
            styleResults.appendChild(result)
        })
    })
})
