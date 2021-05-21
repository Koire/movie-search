import {h, text} from "https://unpkg.com/hyperapp"

export const DisplayTable = (chosenTZ, guardSwaps) => h("table", {}, [
    h("thead", {}, h("tr", {}, [
        h("td", {}, text("UTC")),
        ...chosenTZ.map((element) => h("th", {}, text(element)))
    ])),
    h("tbody", {}, guardSwaps.map((swap) => h("tr", {},
        [ 
            h("td", {}, text(swap.toISOString())),
            ...chosenTZ.map((tz) => h("td", {}, text(new Date(swap.toISOString()).toLocaleString("en-US", {timeZone: tz}))))
        ])
    ))
])