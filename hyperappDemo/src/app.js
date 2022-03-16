import { app, h, text } from "hyperapp"

const addNumber = (state) => ({...state, number: state.number + 1})
app({
    init: {number: 1},
    view: state => h("div", {onclick: addNumber}, text(state.number)),
    node: document.getElementById("app"),
    subscriptions: () => [],
})
