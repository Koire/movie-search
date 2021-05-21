
import {h, text} from "https://unpkg.com/hyperapp"
import {label} from "./htmlTags.js"
import {toggleCreator, preventPropagation, addCG, logInput} from "./actions.js"

export const swapModal = (currentCG) => h("div", {class: "overlay", onclick: toggleCreator},
h("div",
 {onclick: preventPropagation(a=>a), class: "pickerholder"}, [
   label([
       text("Pick a time and date"),
       h("input", {
           type: "datetime-local",
           name: "cg-datetime",
            id: "cg-datetime",
           oninput: logInput, value: currentCG })
   ]),
   h("button", {onclick: addCG}, text("confirm"))
]))