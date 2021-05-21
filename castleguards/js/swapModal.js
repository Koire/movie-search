
import {h, text} from "https://unpkg.com/hyperapp"
import {label, input, select, option} from "./htmlTags.js"
import {toggleCreator, preventPropagation, addCG, logInput} from "./actions.js"

const FlexDiv = (children) => h("div", {class: "formholder"}, children)

export const swapModal = (currentCG) => h("div", {class: "overlay", onclick: toggleCreator},
    h("div",
    {onclick: preventPropagation(a=>a), class: "pickerholder"}, [
    FlexDiv([
        label([
            text("Pick a time and date"),            
        ]),
        input({
            type: "datetime-local",
            name: "cg-datetime",
                id: "cg-datetime",
            oninput: logInput, value: currentCG })
    ]),
    // FlexDiv([
    //     label([
    //         text("Amount (Millions)")
    //     ]),
    //     input({
    //         type: "number",
    //         min: "1",
    //         max: "10"
    //     })
    // ]),
    // FlexDiv([
    //     label([
    //         text("CastleLevel")
    //     ]),
    //     select({}, ["t1","t2","t3","t4"].map((element) => option(text(element))))
    // ]),
    h("button", {onclick: addCG}, text("confirm"))
    ]),
)