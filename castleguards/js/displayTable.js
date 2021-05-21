import {h, text} from "https://unpkg.com/hyperapp"

export const DisplayTable = ({chosenTZ, guardSwaps}) => h("table", {}, [
    h("thead", {}, h("tr", {}, [
        h("td", {}, text("UTC")),
        h("td", {}, text("Amount")),
        h("td", {}, text("Level")),
        ...chosenTZ.map((element) => h("th", {}, text(element)))
    ])),
    h("tbody", {}, guardSwaps.map(({date, amount, level}, idx) => h("tr", {},
        [ 
            h("td", {}, text(date.toISOString())),
            h("td", {}, text(amount+"M")),
            h("td", {}, text(level)),
            ...chosenTZ.map((tz, tzidx) => h("td", {}, text(new Date(date.toISOString()).toLocaleString("en-US", {timeZone: tz}))))
        ])
    ))
])