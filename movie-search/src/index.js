import * as favorites from "./components/favorites.js"
import * as search from "./components/searchbar.js"
import * as tabs from "./components/tabs.js"
import * as details from "./components/details.js"

const initialize = () => {
    favorites.init()
    search.init()
    tabs.init()
    details.init()
}


initialize()