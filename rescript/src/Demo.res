type state = {"firstNumber": int}
type document
@val external doc: document = "document"
@send external getElementById: (document, string) => Dom.element = "getElementById"

@module("hyperapp")
external app: {"node": Dom.element, "init": state, "view": {..} => _} => unit = "app"

@module("hyperapp") external text: string => {..} = "text"

@module("hyperapp") external h: (string, {..}, {..}) => {..} = "h"

let updateState = (oldState, newState) => Js.Obj.assign(Js.Obj.empty(), Js.Obj.assign(oldState, newState))
let add = (s: state, _) => updateState(s, {"firstNumber": s["firstNumber"] + 1})

app({
  "node": getElementById(doc, "app"),
  "init": {"firstNumber": 1},
  "view": state => {
    h("div", {"onclick": add}, text(`hello world! ${state["firstNumber"]}`))
  },
})
