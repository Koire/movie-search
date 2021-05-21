import {h} from "https://unpkg.com/hyperapp"
export const [div, label, option, h1] = ["div", "label", "option", "h1"].map((tag) => (children) => h(tag, {}, children))
            