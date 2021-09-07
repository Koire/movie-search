type state = {firstNumber: int, secondNumber: int}
type document
@val external doc: document = "document"
@send external getElementById: (document, string) => Dom.element = "getElementById"

@module("hyperapp")
external app: {"node": Dom.element, "init": state, "view": state => {..}} => unit = "app"

@module("hyperapp") external text: string => {..} = "text"

@module("hyperapp") external h: (string, {..}, {..}) => {..} = "h"

//let updateState = (oldState, newState) => Js.Obj.assign(Js.Obj.empty(), Js.Obj.assign(oldState, newState))
//let add = (s: state, _) => updateState(s, {"firstNumber": s["firstNumber"] + 1})

let add = (s: state) => { ...s, firstNumber: s.firstNumber + 1 }

app({
  "node": getElementById(doc, "app"),
  "init": {firstNumber: 1, secondNumber: 0},
  "view": state => {
    let string = state.firstNumber->Belt.Int.toString
    h("div", {"onclick": add}, text(j`hello world! $string`))
  },
})
