import {h} from "https://unpkg.com/hyperapp"
export const [div, label, option, h1, main] = ["div", "label", "option", "h1", "main"].map((tag) => (children) => h(tag, {}, children))
export const [input, button, select] = ["input", "button", "select"].map((tag) => (options={}, children=[]) => h(tag, options, children))
            