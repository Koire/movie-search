type state = {
    "firstNumber": int
}
type document
@val external doc: document = "document"
@send external getElementById: (document, string) => Dom.element = "getElementById"

@module("hyperapp")
external app: {"node": Dom.element,
     "init": state,
     "view": ({..}) => _,
    } => unit = "app"

@module("hyperapp") external text: string => ({..}) = "text"

@module("hyperapp") external h: (string, {..}, {..}) => ({..}) = "h"

let add = (oldState: state) => {
    let newObj = Js.Obj.assign(oldState, {"firstNumber": oldState["firstNumber"]+1})
    Js.log(newObj)
    newObj
}

app({
  "node": getElementById(doc, "app"),
  "init": {"firstNumber": 1},
  "view":  (state) => {
      Js.log(state);
      h("div", {"onclick": add}, text(`hello world! ${state["firstNumber"]}`))
  }
})
